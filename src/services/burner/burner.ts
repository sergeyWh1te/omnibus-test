import { EthClient } from '../../clients/eth_client_interface'
import { Burner__factory } from '../../generated'

export class BurnerService {
  private readonly burnerAddress: string
  private ethClient: EthClient

  constructor(burnerAddress: string, ethClient: EthClient) {
    this.burnerAddress = burnerAddress
    this.ethClient = ethClient
  }

  public async hasRole(roleName: string, onAddress: string): Promise<boolean> {
    return await Burner__factory.connect(
      this.burnerAddress,
      this.ethClient.getProvider()
    ).hasRole(roleName, onAddress)
  }
}
