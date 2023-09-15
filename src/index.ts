import { LOCAL_RPC_URL } from './utils/env/env'
import { JsonRpcProvider } from 'ethers'
import {
  AGENT_IMPL_CONTRACT_ADDRESS,
  AGENT_PROXY_CONTRACT_ADDRESS,
  AUTOPILOT_ADDRESS,
  BURNER_CONTRACT_ADDRESS,
  LDO_WHALE_ADDRESS,
  REQUEST_BURN_MY_STETH_ROLE,
  VOTE_PROXY_CONTRACT_ADDRESS,
} from './constants/constants'
import { AnvilClient } from './clients/anvil'
import { WhaleSrv } from './services/whale/whale'
import { AutopilotSrv } from './services/autopilot/autopilot'
import { VoteController } from './handlers/vote/vote'
import { AgentService } from './services/agent/agent'
import { BurnerService } from './services/burner/burner'
import { FundController } from './handlers/fund/fund'
import { OmibusMock_2023_06_20 } from './handlers/vote/mocks/2023_06_20'

const ETH_BALANCE = 10n * 10n ** 18n // 10 ETH
const LDO_BALANCE = 10n ** 18n // 1 LDO

main()

async function main() {
  const provider: JsonRpcProvider = new JsonRpcProvider(LOCAL_RPC_URL())
  const ethClient = new AnvilClient(provider)

  const agentSrv = new AgentService(AGENT_PROXY_CONTRACT_ADDRESS)
  const whaleSrv = new WhaleSrv(ethClient, LDO_WHALE_ADDRESS)
  const autopilotSrv = new AutopilotSrv(ethClient, AUTOPILOT_ADDRESS)
  const fundCtrl = new FundController(ethClient, whaleSrv)

  const autopilotSigner = await autopilotSrv.getSigner()

  await fundCtrl.fundETH(LDO_WHALE_ADDRESS, ETH_BALANCE)
  await fundCtrl.fundETH(AUTOPILOT_ADDRESS, ETH_BALANCE)
  await fundCtrl.fundLDO(AUTOPILOT_ADDRESS, LDO_BALANCE)

  const voteCtr = new VoteController(
    autopilotSigner,
    VOTE_PROXY_CONTRACT_ADDRESS,
    whaleSrv,
    ethClient
  )

  const [autoPilotETH, autoPilotLDO, whaleETH, whaleLDO] = await Promise.all([
    ethClient.getETHBalance(AUTOPILOT_ADDRESS),
    ethClient.getLDOBalance(AUTOPILOT_ADDRESS),
    ethClient.getETHBalance(LDO_WHALE_ADDRESS),
    ethClient.getLDOBalance(LDO_WHALE_ADDRESS),
  ])

  const balances = [
    ['autopilot', autoPilotETH, 'ETH'],
    ['autopilot', autoPilotLDO, 'LDO'],
    ['whale', whaleETH, 'ETH'],
    ['whale', whaleLDO, 'LDO'],
  ]

  console.table(balances)

  const evmScript = agentSrv.batch(OmibusMock_2023_06_20.getEvmScripts())
  const [voteId, receipt] = await voteCtr.startVote(evmScript)
  await voteCtr.vote(voteId)
  await voteCtr.skipTime()
  const r = await voteCtr.passVote(voteId)

  console.log('r: ', r)

  await checkRole()
}

async function checkRole() {
  const provider: JsonRpcProvider = new JsonRpcProvider(LOCAL_RPC_URL())
  const ethClient = new AnvilClient(provider)
  // await ethClient.skipTimeInSeconds(1 * 24 * 60 * 60)

  const blockNumberAfter = await ethClient.getProvider().getBlockNumber()
  console.log('blocknumber: ', blockNumberAfter)

  const burnerSrv = new BurnerService(BURNER_CONTRACT_ADDRESS, ethClient)
  try {
    const hasRole = await burnerSrv.hasRole(
      REQUEST_BURN_MY_STETH_ROLE,
      AGENT_IMPL_CONTRACT_ADDRESS
    )
    console.log('agent impl: ', hasRole)
  } catch (e) {
    console.log(e)
  }

  try {
    const hasRole = await burnerSrv.hasRole(
      REQUEST_BURN_MY_STETH_ROLE,
      AGENT_PROXY_CONTRACT_ADDRESS
    )
    console.log('agent proxy: ', hasRole)
  } catch (e) {
    console.log(e)
  }

  try {
    const hasRole = await burnerSrv.hasRole(
      REQUEST_BURN_MY_STETH_ROLE,
      BURNER_CONTRACT_ADDRESS
    )
    console.log('burner: ', hasRole)
  } catch (e) {
    console.log(e)
  }
}
