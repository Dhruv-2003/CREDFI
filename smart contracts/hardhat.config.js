//0xDeabB9C328d7FAaeB6057452a96E433a28656B78 address of the pool
//NVQaD35yMBCJ1jkgcKSyCeAWmqWoCJuk  - key for alchemy
// https://polygon-mumbai.g.alchemy.com/v2/NVQaD35yMBCJ1jkgcKSyCeAWmqWoCJuk
// f70659f5e43a4449ec4828171fb899206880a212af4f2ef5b333f962712300f1 private key


//Dai token depoyed to : 0x266D29998a7698F91Be84Bbdb94dCC0b2Af15c03
//Cfi token depoyed to : 0xF59C22506cCd2Ef4B410B8560D999C364412F285
//TokenFarm deployed to: 0xBdCa7017753D338489463a096c6c544B6834A440


require("@nomiclabs/hardhat-ethers");

API_URL = "https://polygon-mumbai.g.alchemy.com/v2/NVQaD35yMBCJ1jkgcKSyCeAWmqWoCJuk"
PRIVATE_KEY = "f70659f5e43a4449ec4828171fb899206880a212af4f2ef5b333f962712300f1"

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