require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
const GOERLI_RPC_URL =
  process.env.GOERLI_RPC_URL ||
  "https://eth-mainnet.alchemyapi.io/v2/your-api-key";

const PRIVATE_KEY =
  process.env.METAMASK_PRIVATE_KEY ||
  "0x11ee3108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockConformations: 1,
    },
    goerli: {
      chainId: 5,
      blockConformations: 6,
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
