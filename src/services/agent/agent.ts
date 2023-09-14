import { Agent__factory, Burner__factory } from '../../generated'
import {
  BURNER_CONTRACT_ADDRESS,
  REQUEST_BURN_MY_STETH_ROLE,
} from '../../constants/constants'
import evm, { ParsedEvmScript } from '../../utils/evm/evm'

export class AgentService {
  private readonly agentAddress: string

  constructor(agentAddress: string) {
    this.agentAddress = agentAddress
  }

  public getGrantRoleEVMscript(): string {
    const em: ParsedEvmScript = {
      calls: [
        {
          address: BURNER_CONTRACT_ADDRESS,
          calldata: Burner__factory.createInterface().encodeFunctionData(
            'grantRole',
            [REQUEST_BURN_MY_STETH_ROLE, this.agentAddress]
          ),
        },
      ],
    }

    return Agent__factory.createInterface().encodeFunctionData('forward', [
      evm.serialize(em),
    ])
  }
}
