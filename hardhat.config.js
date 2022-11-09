// require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config()

// /** @type import('hardhat/config').HardhatUserConfig */

// const GOERLI_PRIVATE_KEY = "486d160e788842eefb67f0c395f02b249e20f41f835d67afc2f992c38279775c"
// const GOERLI_URL="https://eth-goerli.g.alchemy.com/v2/hdro9a_zPwjGvgFNSUGGD6VFRp14v2WR"
// module.exports = {
//   solidity: "0.8.9",
//   defaultNetwork: "goerli",
//   network:{
//     hardhat: {
//     },
//     goerli:{
//       url:GOERLI_URL,
//       accounts:[GOERLI_PRIVATE_KEY],
//       chainId:5,
//     }
//   }
// };
require('@nomiclabs/hardhat-ethers')
const API_URL = "https://eth-goerli.g.alchemy.com/v2/hdro9a_zPwjGvgFNSUGGD6VFRp14v2WR";
const PRIVATE_KEY = "486d160e788842eefb67f0c395f02b249e20f41f835d67afc2f992c38279775c"
// const PUBLIC_KEY = "Your Account Address";

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "goerli",
  networks: {
    hardhat:{},
    yourtestnetname:{
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};