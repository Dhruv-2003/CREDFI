import { useState } from 'react';
import {NftCard , Navbar, Footer} from '../components';
import {fetchNFTs} from '../utils/fetchNFTs';
import {ConnectWallet} from '../components';
import { ethers } from 'ethers'

import  avatar from '../../images/avatar.png' ;



const Account = () => {
    const [owner,setOwner] = useState("")
    const [contractAddress, setContractAddress] = useState("")
    const [NFTs, setNFTs] = useState("") 

    const getAddress = async() => {
        window.ethereum.request({ method: "eth_requestAccounts"}).then(result => {setOwner(result)})
    }


    return (
        
        <div>
            <script> window.onLoad={getAddress}</script>
            <div className='gradient-bg-welcome'>
            <Navbar /> </div>


            <div className='gradient-bg-welcome' >
            <div class="my-15 relative w-24 h-24 ">
                <img src={avatar} alt="avatar" class="rounded-full border border-gray-100 shadow-sm items-end"  />
    
            <div class="absolute top-0 right-0 h-6 w-6 my-1 border-4 border-white rounded-full bg-green-400 z-2">
            </div>
            </div>
            </div> 
            {/* <header className=' py-24  mb-12 w-full gradient-bg-welcome '>
                <div className='flex flex-col items-center mb-12'>
                  
                    <div className='-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
                        <input className="border rounded-sm focus:outline-none py-2 px-3 w-full" value={owner} onChange={(e) => setOwner(e.target.value)} placeholder='Insert your wallet address'></input>
                        <input className="focus:outline-none rounded-sm py-2 px-3 w-full" value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} placeholder='Insert NFT Contract address (optional)'></input>
                    </div>
1
                    <div className='w-2/6 flex justify-center'>
                    <button className='py-3 bg-white rounded-sm w-full hover:bg-slate-100' onClick={() => {fetchNFTs(owner, contractAddress, setNFTs)}}>Search</button>
                    </div> 
                </div>
            </header> 
         */}

         <header className='flex flex-wrap justify-center gradient-bg-services'>
             <div>
                 <button className="border rounded-sm text-white" onClick={()=> {fetchNFTs(owner, contractAddress, setNFTs)}}>Click here to show the NFTs</button>
             </div>
         </header>

            <section className='flex flex-wrap justify-center gradient-bg-services'>
                {
                    NFTs ? NFTs.map(NFT => {
                        
                        return (
                           <NftCard key={NFT.value.id + NFT.value.  contractAddress} image={NFT.value.image} id={NFT.value.id} title={NFT.value.title} description={NFT.value.description} address={NFT.value.contractAddress} attributes={NFT.value.attributes}></NftCard>
                        )
                    }) : <div className='text-white'>No NFTs found</div>
                }
            </section>
        


            <Footer/>
        </div>



        
    )
}


export default Account