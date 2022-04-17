
//Dai token depoyed to : 0x266D29998a7698F91Be84Bbdb94dCC0b2Af15c03
//Cfi token depoyed to : 0xF59C22506cCd2Ef4B410B8560D999C364412F285
//TokenFarm deployed to: 0xBdCa7017753D338489463a096c6c544B6834A440

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;


module.exports = {
   solidity: "0.8.9",
   defaultNetwork: "polygon_mumbai",
   networks: {
      hardhat: {},
      polygon_mumbai: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}