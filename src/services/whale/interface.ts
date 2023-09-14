import { JsonRpcSigner } from 'ethers'

export abstract class IWhaleService {
  abstract fundAccount(fundAddress: string, howMuch: bigint): Promise<void>
  abstract getSigner(): JsonRpcSigner
}
