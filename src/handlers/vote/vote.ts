import { BigNumberish, ContractTransactionReceipt } from 'ethers'
import { TokenManager__factory, Voting__factory } from '../../generated'
import evm from '../../utils/evm/evm'
import { IWhaleService } from '../../services/whale/interface'
import { EthClient } from '../../clients/eth_client_interface'
import { IAutopilotSrv } from '../../services/autopilot/interface'

export class VoteController {
  private readonly tokenManagerProxyContractAddress: string
  private readonly autopilotSrv: IAutopilotSrv
  private readonly voteProxyAddress: string
  private readonly whaleSrv: IWhaleService
  private readonly ethClient: EthClient

  constructor(
    autopilotSrv: IAutopilotSrv,
    voteProxyAddress: string,
    tokenManagerProxyContractAddress: string,
    whaleSrv: IWhaleService,
    ethClient: EthClient
  ) {
    this.autopilotSrv = autopilotSrv
    this.voteProxyAddress = voteProxyAddress
    this.tokenManagerProxyContractAddress = tokenManagerProxyContractAddress
    this.whaleSrv = whaleSrv
    this.ethClient = ethClient
  }

  public async startVote(
    serializedEvmScript: string
  ): Promise<[number, ContractTransactionReceipt]> {
    const TokenManager = TokenManager__factory.connect(
      this.tokenManagerProxyContractAddress,
      this.autopilotSrv.getSigner()
    )

    const voteInterface = Voting__factory.createInterface()

    const voteEvmScript = evm.serialize({
      calls: [
        {
          address: this.voteProxyAddress,
          calldata: voteInterface.encodeFunctionData(
            'newVote(bytes,string,bool,bool)',
            [serializedEvmScript, 'TODO: Add a description', false, false]
          ),
        },
      ],
    })

    const tx = await TokenManager.forward(voteEvmScript)
    const receipt = await tx.wait()

    if (!receipt) {
      throw new Error('Invalid confirmations value')
    }

    const votingInterface = Voting__factory.createInterface()

    const startVoteLog = receipt.logs.find(
      (log) => log.topics[0] === votingInterface.getEvent('StartVote').topicHash
    )
    if (!startVoteLog) {
      throw new Error('StartVote log not found')
    }

    const startVoteEvent = votingInterface.parseLog({
      data: startVoteLog?.data,
      topics: [...startVoteLog?.topics],
    })

    const voteId: number = startVoteEvent.args[0]

    return [voteId, receipt]
  }

  public async vote(voteId: BigNumberish): Promise<void> {
    const whaleRunner = this.whaleSrv.getSigner()

    await Voting__factory.connect(this.voteProxyAddress, whaleRunner).vote(
      voteId,
      true,
      false
    )
  }
  public async skipTime() {
    await this.ethClient.skipTimeInSeconds(5 * 24 * 60 * 60)
  }
  public async passVote(voteId: BigNumberish) {
    const whaleRunner = this.whaleSrv.getSigner()

    const tx = await Voting__factory.connect(
      this.voteProxyAddress,
      whaleRunner
    ).executeVote(voteId, {
      gasLimit: 5_000_000,
    })

    const receipt = await tx.wait()
    if (!receipt) {
      throw new Error('transaction wait failed')
    }
    return receipt
  }
}
