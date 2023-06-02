require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ETH_URL = process.env.ETH_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: ETH_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_KEY,
    },
  },
};
