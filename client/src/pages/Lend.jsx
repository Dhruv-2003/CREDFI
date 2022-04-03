import { useState } from 'react'
import dai from '../../images/dai.png' ;
import{ Navbar ,Footer } from "../components" ;
import lend from '../../images/lend.png' ;


const Lend = () => {
  return (
    <div className="gradient-bg-welcome">
      <div className="">
        <Navbar/>
      </div>
      <div className="flex gap-10 flex-col ">

      <div className="flex w-full justify-center items-center">
           <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
               <div className="flex flex-1 justify-start flex-col md:mr-10">
                   <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                       Lend<br />
                   </h1>
                   <p className="text-left text-3xl mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                     You can lend you own crypto currency for now and earn interest in our token CFI .Your investement is ensuresd by our systems , so have a glass of wine and chill while you earn upto 12% APY just be staking the crypto .
                   </p>
               
               </div>
                <div className="flex flex-col flex-1 items-left justify-start w-1/2 md:mt-0 my-20">
                   <h2 className="text-2xl sm:text-4xl text-white  my-20 text-centre">
                      <img src={lend} alt="Card" className="w-30 cursor-pointer "/>

                   </h2>

                   </div> 
               
           </div>
       </div>
      
          <div className="bg-white h-48 rounded-lg my-10 mx-10 ">
          <div className="my-4 mx-4 text-2xl font-bold"> Your supplies</div>
          <div className="flex gap-56 items-start px-10 flex-row md:text-xl sm:text-xs font-bold">
            <div>Assets</div>
            <div>Balance</div>
            <div>APY</div>
            </div>
            <div className="w-full h-[0.25px] bg-gray-400 mt-5 " />
            <div className="my-4 flex gap-60 items-start justify-center flex-row md:text-xl sm:text-xs">
            <div>Coin</div>
            <div>0.04</div>
            <div>12%</div>
            <button className= "text-neutral-900 text-lg bg-cyan-400 py-2 px-7 mx-4 rounded-lg cursor-pointer hover:bg-blue-500">Withdraw</button>
            </div>
            </div>
            
          <div className="bg-white h-54 rounded-lg mx-10"> 
          <div className="my-4 mx-6 text-2xl font-bold"> Assets to supply</div>
          <div className=" flex gap-56 mx-10 px-6 flex-row md:text-xl sm:text-xs text-neutral-900 font-bold ">
            <div>Assets</div>
            <div>Balance</div>
            <div>APY</div>
          
          
          
            </div>
            <div className="w-full h-[0.25px] bg-gray-400 mt-5 " />
            <div className="my-4 flex gap-56 px-2 items-start justify-center flex-row md:text-xl sm:text-xs text-neutral-900">
            <div>Coin 1</div>
            <div>0.04</div>
            <div>12%</div>
            
            <button className= "text-neutral-900 text-lg bg-cyan-400 py-2 px-7 mx-4 rounded-lg cursor-pointer hover:bg-blue-500"> Supply </button>
            </div>
           <div className="my-4 flex gap-56 items-start justify-center flex-row md:text-xl sm:text-xs text-neutral-900">
            <div>Coin 2</div>
            <div>0.04</div>
            <div>11%</div>
            
            <button className= "text-neutral-900 text-lg bg-cyan-400 py-2 px-7 mx-4 rounded-lg cursor-pointer hover:bg-blue-500"> Supply </button>
            </div>
          </div>
          
          
        </div>
      
      <Footer/>
    </div>
  );
}

export default Lend;
