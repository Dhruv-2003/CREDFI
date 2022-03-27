//0xDeabB9C328d7FAaeB6057452a96E433a28656B78 address of the pool
//NVQaD35yMBCJ1jkgcKSyCeAWmqWoCJuk  - key for alchemy
// https://polygon-mumbai.g.alchemy.com/v2/NVQaD35yMBCJ1jkgcKSyCeAWmqWoCJuk
// f70659f5e43a4449ec4828171fb899206880a212af4f2ef5b333f962712300f1 private key


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