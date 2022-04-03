import { AiFillPlayCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import {ethers} from 'ethers' ;
import Card from '../../images/Card.png' ;
const commonStyles= "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white" ;


const Welcome = () => {
    return(
       <div className="flex w-full justify-center items-center">
           <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
               <div className="flex flex-1 justify-start flex-col md:mr-10">
                   <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                       Lend and borrow <br /> using NFTs as collateral
                   </h1>
                   <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                       Explore the NFT world.<br/>
                       Now you can get Crypto loan without selling you NFT safely and Securely on CREDFI.<br />
                       You can Buy NFTs Now , Pay Later 

                   </p>
                  
                   <button 
                   type="button"
                   className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] w-3/5"
                   >
                    <p className="text-white text-base font-semibold">Join now</p>  

                   </button> 

                   
                   
               </div>
               <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
                   <h2 className="text-2xl sm:text-4xl text-white  mt-10 text-centre">
                      <img src={Card} alt="Card" className="w-30 cursor-pointer "/>

                   </h2>

                   </div>
               
           </div>
       </div>
    ) ;
}

export default Welcome;