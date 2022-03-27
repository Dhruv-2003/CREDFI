import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import{ Navbar , Footer } from "../components" ;

const Error = () => {
  let navigate= useNavigate() ;
  return (
    <div className="gradient-bg-welcome">
      <div className="gradient-bg-welcome">
        <Navbar>
        </Navbar>
      </div>
      <div className="flex w-full justify-center items-center gradient-bg-welcome">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col items-start ">
                    <h1 className="text-3xl sm:text-5xl text-white  py-1">
                        ERROR! PAGE DON'T EXSIST
                    </h1>
                    <button onClick={()=> {navigate('/'); }}>
                      <h1 className="text-xl sm:text-3xl text-white  ">
                      Click here to Return to Home page 
                      </h1>
                    </button>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  );
}

export default Error;
