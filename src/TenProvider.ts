import { ProviderWrapper } from 'hardhat/plugins'
import { EIP1193Provider, EthereumProvider, RequestArguments } from 'hardhat/types';


export class TenProvider extends ProviderWrapper {

  shadow: Promise<EIP1193Provider>

  constructor(_wrappedProvider: EIP1193Provider, initializationPromise: Promise<EthereumProvider>) {
    super(_wrappedProvider);
    this.shadow = initializationPromise;
  }

  public async request(args: RequestArguments) {
    if (args.method == 'eth_chainId') {
      return this._wrappedProvider.request(args);
    }

    return (await this.shadow).request(args);
  }
}
