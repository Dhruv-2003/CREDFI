import { useState } from 'react'
import Card3 from '../../images/Card3.png' ;
import{ Navbar ,Footer} from "../components" ;

const Borrow = () => {
  return (
    <div className="gradient-bg-welcome">
      <div className="">
        <Navbar />
      </div>
      <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col items-start ">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                        Borrow
                    </h1>
                </div>
            </div>
        </div>
        
        <div className='flex items-center justify-center '>
        <img src={Card3} alt='Card3' className='w-30 cursor-pointer'/>
        </div>
     
      <Footer />
    </div>
  );
}

export default Borrow;
