import { JsonRpcProvider } from 'ethers'
import { EthClient } from './eth_client_interface'
import bytes from '../utils/bytes/bytes'
import { MiniMeToken__factory } from '../generated'
import { MINITOKEN_CONTRACT_ADDRESS } from '../constants/constants'

export class AnvilClient implements EthClient {
  private readonly _provider: JsonRpcProvider

  constructor(provider: JsonRpcProvider) {
    this._provider = provider
  }

  public async unlock(address: string): Promise<void> {
    await this._provider.send('anvil_impersonateAccount', [address])
  }

  public async setETHBalance(address: string, balance: bigint) {
    await this.unlock(address)

    await this._provider.send('anvil_setBalance', [
      address,
      '0x' + balance.toString(16),
    ])

    console.log(
      address,
      ' ',
      (await this._provider.getBalance(address)).toString()
    )
  }

  public getProvider(): JsonRpcProvider {
    return this._provider
  }

  public async skipTimeInSeconds(seconds: number | bigint): Promise<void> {
    await this._provider.send('evm_increaseTime', [bytes.encode(seconds)])
  }

  public async mine(): Promise<void> {
    return this._provider.send('evm_mine', [])
  }

  public async getLDOBalance(address: string): Promise<bigint> {
    const ldoContract = MiniMeToken__factory.connect(
      MINITOKEN_CONTRACT_ADDRESS,
      this._provider
    )

    return await ldoContract.balanceOf(address)
  }

  public async getETHBalance(address: string): Promise<bigint> {
    return await this._provider.getBalance(address)
  }
}
