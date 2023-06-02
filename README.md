# Etherscan verification

This project demonstrates how you can deploy and verify a contract on Etherscan. It comes with a sample ERC20 contract, and a script that deploys and verififes that contract.

Try running some of the following tasks:

## Usage

First you need to copy the `.env.example` file to `.env` and update it with your own keys.

```shell
npm i
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
```
