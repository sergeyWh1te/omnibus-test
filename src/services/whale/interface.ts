import { JsonRpcSigner } from 'ethers'

export abstract class IWhaleService {
  abstract getSigner(): JsonRpcSigner
}
