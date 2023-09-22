import { Agent__factory } from '../../generated'
import evm, { ParsedEvmScript } from '../../utils/evm/evm'

export class AgentService {
  private readonly agentProxyAddress: string

  constructor(agentAddress: string) {
    this.agentProxyAddress = agentAddress
  }

  public single(em: ParsedEvmScript): string {
    return evm.serialize({
      calls: [
        {
          address: this.agentProxyAddress,
          calldata: Agent__factory.createInterface().encodeFunctionData(
            'forward',
            [evm.serialize(em)]
          ),
        },
      ],
    })
  }

  public batch(evmScripts: ParsedEvmScript[]) {
    const out: ParsedEvmScript = {
      calls: [],
    }

    const agentFactory = Agent__factory.createInterface()

    for (const e of evmScripts) {
      out.calls.push({
        address: this.agentProxyAddress,
        calldata: agentFactory.encodeFunctionData('forward', [
          evm.serialize(e),
        ]),
      })
    }

    return evm.serialize(out)
  }
}
