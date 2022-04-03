import React from 'react';
import { HiMenuAlt4 , HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai' ;
import {BrowserRouter as Router, Route, Routes , Link} from "react-router-dom" ;
import logo from '../../images/logo.png' ;
import WalletCard from './ConnectWallet';

const NavbarItem =({title , classProps}) =>(
        <li className={'mx-4 cursor-pointer ${classProps}'}>
          {title}   
        </li>
    ) ;

const requestAccount = () => {} 
 
 
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return(
        <nav className="w-full flex justify-between items-center p-4 mx-8">
            <Link to= '/'>
            <div className="md:flex-[0.5] flex-initial justify-center items-center px-10 ">
                <img src={logo} alt="logo" className=" w-full cursor-pointer " />
            </div>
            </Link>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial mx-25">
            <li className="text-xl w-full my-2 mx-5"> 
         <Link to='/Pool' className='nav-links' >
              <div> Pool    </div> 
            </Link>
         </li>

         <li className="text-xl w-full my-2 mx-5"> 
         <Link to='/Lend' className='nav-links' >
              <div> Lend   </div> 
            </Link>
         </li>
        
         <li className="text-xl w-full my-2 mx-5"> 
         <Link to='/Borrow' className='nav-links' >
              <div> Borrow </div> 
            </Link>
         </li>
      

         <li className="text-xl w-full my-2 mx-5"> 
         <Link to='/Account' className='nav-links' >
              <div> Account </div> 
            </Link> </li>
            
            <WalletCard/>
            
            {/* <button
            type = 'button'
            onClick={ConnectWallet}
            className="text-white text-lg bg-[#0000ff] w-full py-2 px-10 mx-5 rounded-full cursor-pointer hover:bg-[#2546bd]" >
            <p className="text-white text-base font-semibold">
              Connect Wallet 
            </p>
          </button> */}

            </ul>
            <div  className="flex relative">
                {toggleMenu
                ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <ul
                    className="z-10 fixed top-0 -right-2 p-3 w-[70ve] h-screen shadow-2xl md:hidden list-none
                    flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
                        <li className="tecxt-xl w-full my-2" >
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />

                        </li>
                        {["Pool","Lend", "Borrow", "Account"].map((item,index) => (
                  <NavbarItem key={item + index} title={item} classProps="my-2-text-lg"/>

              ))}
                        
                    </ul>
                )

                }

            </div>

        </nav>
    ) ;
}

export default Navbar ;