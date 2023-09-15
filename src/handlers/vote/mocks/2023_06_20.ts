import { ParsedEvmScript } from '../../../utils/evm/evm'
import {
  AGENT_PROXY_CONTRACT_ADDRESS,
  BURNER_CONTRACT_ADDRESS,
  INSURANCE_CONTRACT_ADDRESS,
  LIDO_PROXY_CONTRACT_ADDRESS,
  REQUEST_BURN_MY_STETH_ROLE,
} from '../../../constants/constants'
import { Burner__factory, InsuranceFund__factory } from '../../../generated'
import { parseEther } from 'ethers'

const INSURANCE_STETH_AMOUNT = parseEther('13.45978634')

export class OmibusMock_2023_06_20 {
  public static getEvmScripts(): ParsedEvmScript[] {
    const out: ParsedEvmScript[] = [
      {
        calls: [
          {
            address: INSURANCE_CONTRACT_ADDRESS,
            calldata:
              InsuranceFund__factory.createInterface().encodeFunctionData(
                'transferERC20',
                [
                  LIDO_PROXY_CONTRACT_ADDRESS,
                  AGENT_PROXY_CONTRACT_ADDRESS,
                  INSURANCE_STETH_AMOUNT,
                ]
              ),
          },
        ],
      },
      {
        calls: [
          {
            address: BURNER_CONTRACT_ADDRESS,
            calldata: Burner__factory.createInterface().encodeFunctionData(
              'grantRole',
              [REQUEST_BURN_MY_STETH_ROLE, AGENT_PROXY_CONTRACT_ADDRESS]
            ),
          },
        ],
      },
    ]

    return out
  }
}
