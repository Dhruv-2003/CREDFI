import React, { useEffect, useState } from "react";
import {ethers} from 'ethers' ;

const connectWallet = async () => {

  const [currentAccount, setCurentAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);

	try {
        if (!ethereum) return alert("Please install MetaMask.");
  
        const accounts = await ethereum.request({ method: "eth_requestAccounts", });
  
        setCurrentAccount(accounts[0]);
        window.location.reload();
      } catch (error) {
        console.log(error);
  
        throw new Error("No ethereum object");
      }

}


export default connectWallet ;