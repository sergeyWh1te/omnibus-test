import { JsonRpcProvider } from 'ethers'

export abstract class EthClient {
  abstract unlock(address: string): Promise<void>
  abstract setETHBalance(address: string, balance: bigint): Promise<void>
  abstract getProvider(): JsonRpcProvider
  abstract skipTimeInSeconds(seconds: number | bigint): Promise<void>
  abstract mine(): Promise<void>
  abstract getLDOBalance(address: string): Promise<bigint>
}
