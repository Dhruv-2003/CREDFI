import { useState } from 'react'
import Card3 from '../../images/Card3.png' ;
import{ Navbar ,Footer} from "../components" ;
import img from '../../images/borrow.jpg' ;

const Borrow = () => {
  return (
    <div className="gradient-bg-welcome">
      <div className="">
        <Navbar />
      </div>
      <div className="flex gap-10 flex-col ">
      
      <div className="flex w-full justify-center items-center">
           <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
               <div className="flex flex-1 justify-start flex-col md:mr-10">
                   <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                       Borrow<br />
                   </h1>
                   <p className="text-left text-3xl mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                     Now you can borrown stable crytp against any NFT you give us as a collateral.You can anytime comeback to repay the amount along with some interest and Your NFT will be sent back to you.
                   </p>
               
               </div>
                <div className="flex flex-col flex-1 items-left justify-start w-1/2 md:mt-0 my-20">
                   <h2 className="text-2xl sm:text-4xl text-white  my-20 text-centre">
                      <img src={img} alt="Card" className="w-30 cursor-pointer  rounded"/>

                   </h2>

                   </div> 
               
           </div>
       </div>
      
          <div className="bg-white h-48 rounded-lg  mx-10 ">
          <div className="my-4 mx-4 text-2xl font-bold"> Your Borrowings</div>
          <div className="flex gap-32 mx-10 px-6 flex-row md:text-xl sm:text-xs font-bold">
            <div>Assets</div>
            <div>Balance</div>
            <div>APY</div>
            </div>
            <div className="w-full h-[0.25px] bg-gray-400 mt-5 " />
            <div className="my-4 flex gap-40 px-16 items-start flex-row md:text-xl sm:text-xs">
            <div>Coin</div>
            <div>0.04</div>
            <div>12%</div>
            <button className= "text-neutral-900 text-lg bg-cyan-400 py-2 px-7 mx-4 rounded-lg cursor-pointer hover:bg-blue-500]">Repay</button>
            </div>
            </div>
            
          <div className="bg-white h-54 rounded-lg mx-10"> 
          <div className="my-4 mx-6 text-2xl font-bold"> Assets can be borrowed</div>
          <div className=" flex gap-36 mx-10 px-6 flex-row md:text-xl sm:text-xs text-neutral-900 font-bold ">
            <div>Assets</div>
            <div>Balance</div>
            <div>APY</div>
            <div>Collateral</div>
          
          
            </div>
            <div className="w-full h-[0.25px] bg-gray-400 mt-5 " />
            <div className="my-4 flex gap-40 px-2 items-start justify-center flex-row md:text-xl sm:text-xs text-neutral-900">
            <div>Coin 1</div>
            <div>0.04</div>
            <div>12%</div>
            <div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></div>
            <button className= "text-neutral-900 text-lg bg-cyan-400 py-2 px-7 mx-4 rounded-lg cursor-pointer hover:bg-blue-500">Borrow</button>
            </div>
           <div className="my-4 flex gap-40 items-start justify-center flex-row md:text-xl sm:text-xs text-neutral-900">
            <div>Coin 2</div>
            <div>0.04</div>
            <div>11%</div>
            <div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></div>
            <button className= "text-neutral-900 text-lg bg-cyan-400 py-2 px-7 mx-4 rounded-lg cursor-pointer hover:bg-blue-500"> Borrow</button>
            </div>
          </div>

        </div>
     
      <Footer />
    </div>
  );
}

export default Borrow;
