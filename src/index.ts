import { getConfig } from './utils/env/env'
import { JsonRpcProvider } from 'ethers'
import { AnvilClient } from './clients/anvil'
import { WhaleSrv } from './services/whale/whale'
import { AutopilotSrv } from './services/autopilot/autopilot'
import { VoteController } from './handlers/vote/vote'
import { AgentService } from './services/agent/agent'
import { BurnerService } from './services/burner/burner'
import { OmibusMock_2023_06_20 } from './handlers/vote/mocks/2023_06_20'
import * as E from 'fp-ts/Either'
import * as process from 'process'
import { Config } from './utils/env/entity/config'
import { LdoSrv } from './services/Ldo/ldo'

const ETH_BALANCE = 10n * 10n ** 18n // 10 ETH
const LDO_BALANCE = 10n ** 18n // 1 LDO

main()

async function main() {
  const cfg = getConfig()
  if (E.isLeft(cfg)) {
    console.log(cfg.left.message)

    process.exit(1)
  }

  const config: Config = cfg.right

  const provider: JsonRpcProvider = new JsonRpcProvider(
    config.dotEnvConfig.LOCAL_RPC_URL
  )
  const ethClient = new AnvilClient(provider)

  const agentSrv = new AgentService(
    config.deployedConfig['app:aragon-agent'].proxyAddress
  )
  const whaleSrv = new WhaleSrv(
    ethClient,
    config.dotEnvConfig.LDO_WHALE_ADDRESS
  )

  const ldoSrv = new LdoSrv(
    ethClient.getProvider(),
    config.deployedConfig.daoTokenAddress,
    whaleSrv
  )

  const autopilotSrv = new AutopilotSrv(
    ethClient,
    config.dotEnvConfig.AUTOPILOT_ADDRESS
  )

  const whaleLDObalance = await ldoSrv.getLDOBalance(config.dotEnvConfig.LDO_WHALE_ADDRESS)
  if (whaleLDObalance === 0n) {
    console.log(`Zero LDO balance on ${config.dotEnvConfig.LDO_WHALE_ADDRESS}`);
    process.exit(1);
  }

  await ethClient.setETHBalance(
    config.dotEnvConfig.LDO_WHALE_ADDRESS,
    ETH_BALANCE
  )
  await ethClient.setETHBalance(
    config.dotEnvConfig.AUTOPILOT_ADDRESS,
    ETH_BALANCE
  )
  await ldoSrv.fundLDO(config.dotEnvConfig.AUTOPILOT_ADDRESS, LDO_BALANCE)

  const voteCtr = new VoteController(
    autopilotSrv,
    config.deployedConfig['app:aragon-voting'].proxyAddress,
    config.deployedConfig['app:aragon-token-manager'].proxyAddress,
    whaleSrv,
    ethClient
  )

  const [autoPilotETH, autoPilotLDO, whaleETH, whaleLDO] = await Promise.all([
    ethClient.getETHBalance(config.dotEnvConfig.AUTOPILOT_ADDRESS),
    ldoSrv.getLDOBalance(config.dotEnvConfig.AUTOPILOT_ADDRESS),
    ethClient.getETHBalance(config.dotEnvConfig.LDO_WHALE_ADDRESS),
    ldoSrv.getLDOBalance(config.dotEnvConfig.LDO_WHALE_ADDRESS),
  ])

  const balances = [
    ['autopilot', autoPilotETH, 'ETH'],
    ['autopilot', autoPilotLDO, 'LDO'],
    ['whale', whaleETH, 'ETH'],
    ['whale', whaleLDO, 'LDO'],
  ]

  console.table(balances)

  const evmScript = agentSrv.batch(OmibusMock_2023_06_20.getEvmScripts(config))
  const [voteId, receipt] = await voteCtr.startVote(evmScript)
  await voteCtr.vote(voteId)
  await voteCtr.skipTime()
  const r = await voteCtr.passVote(voteId)

  console.log('r: ', r)

  //await checkRole(cfg.right)
}

async function checkRole(cfg: Config) {
  const provider: JsonRpcProvider = new JsonRpcProvider(
    cfg.dotEnvConfig.LOCAL_RPC_URL
  )
  const ethClient = new AnvilClient(provider)
  // await ethClient.skipTimeInSeconds(1 * 24 * 60 * 60)

  const blockNumberAfter = await ethClient.getProvider().getBlockNumber()
  console.log('blocknumber: ', blockNumberAfter)

  const burnerSrv = new BurnerService(
    cfg.deployedConfig.burner.address,
    ethClient
  )
  try {
    const hasRole = await burnerSrv.hasRole(
      cfg.dotEnvConfig.REQUEST_BURN_MY_STETH_ROLE,
      cfg.deployedConfig['app:aragon-agent'].implementation.address
    )
    console.log('agent impl: ', hasRole)
  } catch (e) {
    console.log(e)
  }

  try {
    const hasRole = await burnerSrv.hasRole(
      cfg.dotEnvConfig.REQUEST_BURN_MY_STETH_ROLE,
      cfg.deployedConfig['app:aragon-agent'].proxyAddress
    )
    console.log('agent proxy: ', hasRole)
  } catch (e) {
    console.log(e)
  }

  try {
    const hasRole = await burnerSrv.hasRole(
      cfg.dotEnvConfig.REQUEST_BURN_MY_STETH_ROLE,
      cfg.deployedConfig.burner.address
    )
    console.log('burner: ', hasRole)
  } catch (e) {
    console.log(e)
  }
}
