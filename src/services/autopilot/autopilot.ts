import { JsonRpcSigner } from 'ethers'
import { EthClient } from '../../clients/eth_client_interface'

export class AutopilotSrv {
  private readonly autopilotAddress: string
  private ethClient: EthClient

  constructor(ethClient: EthClient, autopilotAddress: string) {
    this.autopilotAddress = autopilotAddress
    this.ethClient = ethClient
  }
  public async getSigner(): Promise<JsonRpcSigner> {
    return new JsonRpcSigner(
      this.ethClient.getProvider(),
      this.autopilotAddress
    )
  }
}
