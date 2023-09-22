import { JsonRpcSigner } from 'ethers'

export abstract class IAutopilotSrv {
  abstract getSigner(): JsonRpcSigner
}
