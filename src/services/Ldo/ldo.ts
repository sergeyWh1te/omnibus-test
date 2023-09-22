import { MiniMeToken__factory } from '../../generated'
import { JsonRpcProvider } from 'ethers'
import { IWhaleService } from '../whale/interface'

export class LdoSrv {
  private readonly _provider: JsonRpcProvider
  private readonly daoTokenAddress: string
  private readonly whaleSrv: IWhaleService
  constructor(
    provider: JsonRpcProvider,
    daoTokenAddress: string,
    whaleSrv: IWhaleService
  ) {
    this._provider = provider
    this.daoTokenAddress = daoTokenAddress
    this.whaleSrv = whaleSrv
  }

  public async getLDOBalance(address: string): Promise<bigint> {
    const ldoContract = MiniMeToken__factory.connect(
      this.daoTokenAddress,
      this._provider
    )

    return await ldoContract.balanceOf(address)
  }

  public async fundLDO(address: string, howMuchLDO: bigint): Promise<void> {
    const miniMeToken = MiniMeToken__factory.connect(
      this.daoTokenAddress,
      this._provider
    )

    const ldoBalance = await miniMeToken.balanceOf(address)

    if (ldoBalance === 0n) {
      const whaleSigner = this.whaleSrv.getSigner()

      await MiniMeToken__factory.connect(
        this.daoTokenAddress,
        whaleSigner
      ).transfer(address, howMuchLDO)
    }
  }
}
