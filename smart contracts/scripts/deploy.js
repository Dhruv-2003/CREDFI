const hre = require("hardhat");

const main = async () =>{
  const DaiToken = await hre.ethers.getContractFactory("DaiToken");
  const daiToken = await DaiToken.deploy();

  await daiToken.deployed();
  console.log("Dai token depoyed to :",daiToken.address);

  const CfiToken = await hre.ethers.getContractFactory("CfiToken");
  const cfiToken = await CfiToken.deploy();

  await cfiToken.deployed();
  console.log("Cfi token depoyed to :",cfiToken.address);
  

  const TokenFarm = await hre.ethers.getContractFactory("TokenFarm");
  const tokenFarm = await TokenFarm.deploy(TokenFarm, cfiToken.address, daiToken.address);

  await tokenFarm.deployed();
  console.log("TokenFarm deployed to:", tokenFarm.address);

  // Transfer all tokens to TokenFarm (1 million)
  await cfiToken.transfer(tokenFarm.address, '1000000000000000000000000')

}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();