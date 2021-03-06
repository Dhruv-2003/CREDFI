import React,{useState} from 'react' ;
import {ethers} from 'ethers';
import { shorten } from '../utils/shorten';



const WalletCard = () =>{

  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

const ConnectWallet= async() =>{
    try {
        if(!ethereum) console.log("Please install MetaMask.") ;
  
        window.ethereum.request({ method: "eth_requestAccounts" })
        .then(result =>{accountChangedHandler(result[0]);
        setConnButtonText(shorten(result[0]));
        getAccountBalance(result[0]) ;
      })

      } 
      catch(error) {
        console.log(error);

      }
    }
    


const accountChangedHandler = (newAccount) => {
      setDefaultAccount(newAccount);
      getAccountBalance(newAccount.toString());
    }    

const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};    

  const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}

  window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);  
  const balance= userBalance ;
  const account= defaultAccount ; 

  return(
    <button
            type = 'button'
            onClick={ConnectWallet}
            className="text-white text-lg bg-[#ADD8E6] w-full py-2 px-10 mx-5 justify-end rounded-full cursor-pointer hover:bg-[#00FFFF]" >
            <p className="text-black text-base font-semibold">
              {connButtonText}
            </p>
          </button>
  )

  
} 


export default WalletCard;