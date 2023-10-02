import { ParsedEvmScript } from '../../../utils/evm/evm'
import { Burner__factory, Finance__factory, InsuranceFund__factory } from '../../../generated'
import { AddressLike, BigNumberish, parseEther } from 'ethers'
import { Config } from '../../../utils/env/entity/config'

const INSURANCE_STETH_AMOUNT = parseEther('13.45978634')
const LDO_BALANCE = 10n ** 18n // 1 LDO

export class OmnibusMock_2023_06_20 {

  public static getEvmScripts(cfg: Config): ParsedEvmScript[] {
    const dotEnvCfg = cfg.dotEnvConfig
    const deployedCfg = cfg.deployedConfig

    const out: ParsedEvmScript[] = [
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
      // {
      //   calls: [
      //     {
      //       address: deployedCfg['app:aragon-finance'].proxyAddress,
      //       calldata: Finance__factory.createInterface().encodeFunctionData(
      //         'newImmediatePayment',
      //         [
      //           deployedCfg.daoTokenAddress,
      //           dotEnvCfg.AUTOPILOT_ADDRESS,
      //           LDO_BALANCE,
      //           'reference',
      //         ]
      //       ),
      //     },
      //   ],
      // }
    ]

    return out
  }
}
