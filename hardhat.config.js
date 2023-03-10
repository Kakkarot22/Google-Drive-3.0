require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
const GOERLI_URL=process.env.GOERLI_URL
const PRIVATE_KEY= process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    hardhat:{
      chainId:31337,
    },
   
  },
  paths:{
    artifacts:"./client/src/artifacts"
  }
};
