// all about the transaction of lender with the farm 
// The javascript version of token needs to be created for the contract with web3.js and also importing its ABI to reolve
// load web3
// create functions which are in smart contract and needed to be execute


import React,{useState , useEffect} from "react";
import ethers from "ethers" ;

import DaiToken from '../utils/DaiToken.json' ;
import CfiToken from '../utils/CfiToken.json' ;
import TokenFarm from '../utils/TokenFarm.json' ;

let Web3= required("web3");
  
const TokenFarmAddress = "0xBdCa7017753D338489463a096c6c544B6834A440" ;
const DaiTokenAddress = "0x266D29998a7698F91Be84Bbdb94dCC0b2Af15c03" ;
const CfiTokenAddress = "0xF59C22506cCd2Ef4B410B8560D999C364412F285" ;

export const Transaction = react.createContext() ;
const {ethereum} = window ;

const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    
    const tokenFarm = new Web3.eth.Contract(TokenFarm.abi, TokenFarmAddress);
    const daiToken = new Web3.eth.Contract( DaiToken.abi,DaiTokenAddress);
    const cfiToken = new ethers.Contract(CfiToken.abi,CfiTokenAddress);


  
    return transactionsContract;
  };
  