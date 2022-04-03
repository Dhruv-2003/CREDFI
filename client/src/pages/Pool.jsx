import { useState } from 'react' ;
import {BrowserRouter as Router, Route, Routes , Link} from "react-router-dom" ;
import pool from '../../images/pool.png' ;
import{ Navbar ,Footer} from "../components" ;
import img from '../../images/Pool.png' ;

const Pool = () => {
  return (
    <div className="gradient-bg-welcome">
   ]
        <Navbar />
        

        <div className="flex w-full justify-center items-center">
           <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
               <div className="flex flex-1 justify-start flex-col md:mr-10">
                   <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                       Pool<br />
                   </h1>
                   <p className="text-left text-3xl mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                       This is the pool where all the action takes place .
                      Crypto comes in from the lender , then flows out to the borrower as and when needed. It  is completely safe and secured
                   </p>
               
               </div>
               <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
                   <h2 className="text-2xl sm:text-4xl text-white  mt-10 text-centre">
                      <img src={img} alt="Card" className="w-30 cursor-pointer "/>

                   </h2>

                   </div>
               
           </div>
       </div>
        {/*
        <div className='object-center'>
        <div className=" h-54 mx-10 my-10 w-1/2 rounded-lg object - right "> 
        
        <div className=" flex gap-72 mx-20 py flex-row md:text-xl sm:text-xs text-slate-400">
          <div>card</div>
          </div>
          </div>

          <div className="flex flex-col flex-1 items-center w-full md:mt-0 mt-10 w-1/2">
                   <h2 className="text-2xl sm:text-4xl text-white  mt-10 text-centre">
                      <img src={img} alt="Card" className="w-30 cursor-pointer "/>

                   </h2>

                   </div>  

  </div> */}

                
        <div className="flex h-56  rounded-lg object-center">
          <button className= "text-white text-2xl font-extrabold bg-cyan-400 py-1 px-4 mx-20 my-16 h-20 rounded-lg cursor-pointer hover:bg-blue-500" id="open-btn"> Set collateral as NFT </button>
          <Link to='/Borrow' className='nav-links' >
          <button className= "text-white text-2xl font-extrabold bg-cyan-400 py-2 px-7 mx-20 my-16 h-20 rounded-lg cursor-pointer hover:bg-blue-500"> Borrow Money </button>
          </Link>
          <Link to='/Lend' className='nav-links' >
          <button className= "text-white text-2xl font-extrabold bg-cyan-400 py-2 px-7 mx-10 my-16 h-20 rounded-lg cursor-pointer hover:bg-blue-500">Add liquidity and earn interest</button> 
          </Link>
          </div>

        
      
    
      
      <Footer />

      <div className='bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center hidden ' id="overlay">
            <div class="bg-white rounded max-w-sm py-2 px-2 shadow-xl text-gray-800">
              <div class="flex justify-between items-center">
                <h4 class="text-lg font-bold">Set NFT as collateral</h4>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" id="close-modal">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
              </div>
              <div class="mt-2 text-sm">
                Send you NFT to the address : 0x92c207647Cf1d126135B8122F8fe3049329690E4
              </div>

              <div className='w-full flex flex-col justify-start items-center blue-glassmorphism rounded'>
                        <input className="border rounded-sm focus:outline-none py-2 px-3 w-full"  placeholder='Insert your NFT address'></input>
              </div>
        
              
              
              <div class="mt-3 flex justify-end space-x-3">
              <button class="px-3 py-1 rounded bg-indigo-700 text-white">Confirm Send</button>
              <button class="px-3 py-1 rounded bg-indigo-700 text-white">Cancel Send</button>
            </div>
            </div>
          </div>

          {/* <script>
        window.addEventListener('DOMContentLoaded', () => {
            const overlay = document.querySelector('#overlay')
            const openBtn = document.querySelector('#open-btn')
            const closeBtn = document.querySelector('#close-modal')

            const toggleModal = () => {
                overlay.classList.toggle('hidden')
                overlay.classList.toggle('flex')
            }

            openBtn.addEventListener('click', toggleModal)

            closeBtn.addEventListener('click', toggleModal)
        })

    </script>
   */}
    </div> 
  );
}

export default Pool ;