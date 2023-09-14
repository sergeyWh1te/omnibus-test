import { MINITOKEN_CONTRACT_ADDRESS } from '../../constants/constants'
import { MiniMeToken__factory } from '../../generated'
import { WhaleSrv } from '../../services/whale/whale'
import { EthClient } from '../../clients/eth_client_interface'

export class FundController {
  private whaleSrv: WhaleSrv
  private ethClient: EthClient
  constructor(whaleSrv: WhaleSrv, ethClient: EthClient) {
    this.whaleSrv = whaleSrv
    this.ethClient = ethClient
  }

  public async fundLDO(address: string, howMuchLDO: bigint): Promise<void> {
    const miniMeToken = MiniMeToken__factory.connect(
      MINITOKEN_CONTRACT_ADDRESS,
      this.ethClient.getProvider()
    )

    const ldoBalance = await miniMeToken.balanceOf(address)
    if (ldoBalance === 0n) {
      await this.whaleSrv.fundAccount(address, howMuchLDO)
    }
  }

  public async fundETH(address: string, howMuchETH: bigint): Promise<void> {
    await this.ethClient.setETHBalance(address, howMuchETH)
  }
}
