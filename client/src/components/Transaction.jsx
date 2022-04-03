import Card2 from '../../images/Card2.png' ;
import Card4 from '../../images/Card4.png' ;
const Transaction = () => {
    return(
        <div className="flex w-full justify-center items-center gradient-bg-welcome">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                       Future plans
                    </h1>
                    <h2 className="text-l sm:text-xl text-white py-1" >
                        <ul>

                            <li>1. We will be introducing NFT pools so that borrow and lender can directly communicate with each other making it a P2P platform .They can finalixe among themselves the value of NFT and then CREDFI issue tokens to both lender , borrower and Escrow , so that the lending is safe and secure  </li>
                            <br/>
                            <li>2. Buy now Pay later services for NFT , so that you don't hesitate to buy a high value NFT due to lack of funds. That feature is under build .</li>

                        </ul>
                        <div className='flex items-stretch '>
                         <img src={Card2} alt="Card" className="w-1/2 cursor-pointer" />
                         <img src={Card4} alt="Card" className="w-1/2 cursor-pointer" />
                         </div>
                    </h2>
                    
                    
                </div>
            </div>
        </div>
    ) ;
}

export default Transaction ;