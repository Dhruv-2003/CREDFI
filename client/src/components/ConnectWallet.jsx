import React,{useState} from 'react'
import { ethers } from 'ethers'


const ConnectWallet = async() =>{
    try {
        if (!ethereum) return alert("Please install MetaMask.");
  
        const address = await ethereum.request({ method: "eth_requestAccounts", });

        console.log(address)
  
      
      } catch (error) {
        console.log(error);
  
        throw new Error("No ethereum object");
      }
    }



export  default ConnectWallet;