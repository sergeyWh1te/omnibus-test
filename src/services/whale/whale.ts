import { JsonRpcSigner } from 'ethers'
import { EthClient } from '../../clients/eth_client_interface'
import { MINITOKEN_CONTRACT_ADDRESS } from '../../constants/constants'
import { MiniMeToken__factory } from '../../generated'
import { IWhaleService } from './interface'

const UnlimitedETH = 100n * 10n ** 18n
export class WhaleSrv implements IWhaleService {
  private ethClient: EthClient
  private readonly whaleLDOAddress: string
  constructor(ethClient: EthClient, whaleLDOAddress: string) {
    this.ethClient = ethClient
    this.whaleLDOAddress = whaleLDOAddress
  }
  public getSigner(): JsonRpcSigner {
    return new JsonRpcSigner(this.ethClient.getProvider(), this.whaleLDOAddress)
  }
  public async fundAccount(
    fundAddress: string,
    howMuch: bigint
  ): Promise<void> {
    const whaleSigner = this.getSigner()

    await MiniMeToken__factory.connect(
      MINITOKEN_CONTRACT_ADDRESS,
      whaleSigner
    ).transfer(fundAddress, howMuch)
  }
}
