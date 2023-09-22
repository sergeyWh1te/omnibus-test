import { JsonRpcSigner } from 'ethers'
import { EthClient } from '../../clients/eth_client_interface'
import { IAutopilotSrv } from './interface'

export class AutopilotSrv implements IAutopilotSrv {
  private readonly autopilotAddress: string
  private ethClient: EthClient

  constructor(ethClient: EthClient, autopilotAddress: string) {
    this.autopilotAddress = autopilotAddress
    this.ethClient = ethClient
  }
  public getSigner(): JsonRpcSigner {
    return new JsonRpcSigner(
      this.ethClient.getProvider(),
      this.autopilotAddress
    )
  }
}
