import { JsonRpcSigner } from 'ethers'
import { EthClient } from '../../clients/eth_client_interface'
import { IWhaleService } from './interface'

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
}
