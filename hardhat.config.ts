import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      chainId: 1,
    },
    local: {
      accounts: {
        mnemonic: 'test test test test test test test test test test test junk',
      },
      url: 'http://127.0.0.1:8545/',
      chainId: 1
    }
  },
  typechain: {
    externalArtifacts: ["contracts/*.json"],
    outDir: "./src/generated/",
  },
};

export default config;
