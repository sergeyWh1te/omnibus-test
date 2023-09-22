import { ParsedEvmScript } from '../../../utils/evm/evm'
import { Burner__factory, InsuranceFund__factory } from '../../../generated'
import { parseEther } from 'ethers'
import { Config } from '../../../utils/env/entity/config'

const INSURANCE_STETH_AMOUNT = parseEther('13.45978634')

export class OmibusMock_2023_06_20 {
  public static getEvmScripts(cfg: Config): ParsedEvmScript[] {
    const dotEnvCfg = cfg.dotEnvConfig
    const deployedCfg = cfg.deployedConfig

    const out: ParsedEvmScript[] = [
      {
        calls: [
          {
            address: dotEnvCfg.INSURANCE_CONTRACT_ADDRESS,
            calldata:
              InsuranceFund__factory.createInterface().encodeFunctionData(
                'transferERC20',
                [
                  deployedCfg['app:lido'].proxyAddress,
                  deployedCfg['app:aragon-agent'].proxyAddress,
                  INSURANCE_STETH_AMOUNT,
                ]
              ),
          },
        ],
      },
      {
        calls: [
          {
            address: deployedCfg.burner.address,
            calldata: Burner__factory.createInterface().encodeFunctionData(
              'grantRole',
              [
                dotEnvCfg.REQUEST_BURN_MY_STETH_ROLE,
                deployedCfg['app:aragon-agent'].proxyAddress,
              ]
            ),
          },
        ],
      },
    ]

    return out
  }
}
