import React from "react";
const Services = () => {
    return(
        <div className="flex w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col items-start ">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                        How it works?
                    </h1>
                    <h2 className="text-xl sm:text-xl text-white py-1" >
                        <ol>
                        1. Lender Comes to stake thier DAI tokens and earn an handsome amount of interest in our own CREDFI token<br/>
                        <br/>
                        2. Borrower can Keep any of the NFT he owns as a Collateral.<br />
                        <br/>
                        3. NFT is transferred to our Escrow account , on behalf of which we issue(mint) another tokens.<br />
                        <br/>
                        4. Borrower gets some amount of these tokens too . <br />
                        <br/>
                        5. Your NFTs are safe and secure with us and even lender's amount is assured.<br />
                        <br/>
                        6. For safety purpose we are allowing only limited NFT collection.<br />
                        <br/>
                        7. The maximum loan amount is capped to 30%.<br />
                        <br/>
                        8. Funds are issued in form of DAI tokens and sent to your wallet.<br />
                        <br/>
                        9. Repayement peroid is 30 days for now , or either it can be selected . <br />
                        <br/>
                        10.Repayement is to be done back in DAI token along with the extra interest as calculated .<br />
                        <br/>
                        11.Nft will be unlocked after this process is done and then can be transferred back to you account.<br />
                        </ol>
                    </h2>
                </div>
            </div>
        </div>

        
    ) ;
}

export default Services ;