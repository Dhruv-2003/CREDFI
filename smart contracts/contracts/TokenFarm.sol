//SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0 < 0.9.0 ;

import "./DaiToken.sol";
import "./CfiToken.sol";

contract TokenFarm {
    string public name = "Dapp Token Farm";
    address public owner;
    CfiToken public cfiToken;
    DaiToken public daiToken;

    address[] public stakers;
    address[] public borrowers;
    mapping(address => uint) public userBalance;
    mapping(address => uint) public borrowBalance ;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;
    mapping(address => bool) public isBorrowing ;
    mapping(address => bool) public hasBorrowed ;



    constructor(CfiToken _cfiToken, DaiToken _daiToken) {
        cfiToken = _cfiToken;
        daiToken = _daiToken;
        owner = msg.sender;
    }

    ///Lender

    function supply(uint _amount) public {
        // Require amount greater than 0
        require(_amount > 0, "amount cannot be 0");

        // Trasnfer Mock Dai tokens to this contract for staking
        daiToken.transferFrom(msg.sender, address(this), _amount);

        // Update staking balance
        userBalance[msg.sender] = userBalance[msg.sender] + _amount;

        // Add user to stakers array *only* if they haven't staked already
        if(!hasStaked[msg.sender]) {
            stakers.push(msg.sender);
        }

        // Update staking status
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }

    // Unstaking Tokens (Withdraw)
    function withdraw() public {
        // Fetch staking balance
        uint balance = userBalance[msg.sender];

        // Require amount greater than 0
        require(balance > 0, "staking balance cannot be 0");

        // Transfer Mock Dai tokens to this contract for staking
        daiToken.transfer(msg.sender, balance);

        // Reset staking balance
        userBalance[msg.sender] = 0;

        // Update staking status
        isStaking[msg.sender] = false;
    }

    // Issuing Tokens
    function issueTokens() public {
        // Only owner can call this function
        require(msg.sender == owner, "caller must be the owner");

        // Issue tokens to all stakers
        for (uint i=0; i<stakers.length; i++) {
            address recipient = stakers[i];
            uint balance = userBalance[recipient];
            if(balance > 0) {
                cfiToken.transfer(recipient, balance);
            }
        }
    }

    //// Borrower

    //sending token for the borrowers to the account
    function borrow(uint amount) public {
         // Require amount greater than 0
        require(amount > 0, "amount cannot be 0");

        // need to check if NFT is rcvd or not and then call this function.
        // Transfer Mock Dai tokens to this contract for staking
        daiToken.transfer(msg.sender, amount);

        // Set user balance 
        borrowBalance[msg.sender] = amount;

        // Update staking status
        isBorrowing[msg.sender] = true ;
        hasBorrowed[msg.sender] =true ;
        

        // Add user to stakers array *only* if they haven't staked already
        if(!hasBorrowed[msg.sender]) {
            borrowers.push(msg.sender);
        }

        

    }

    //Repaying the loan amount
    function repay(uint intrest) public {
        //fetching the balance borrowed
        uint amount = borrowBalance[msg.sender] ;

        // Require amount greater than 0
        require(amount > 0, "amount cannot be 0");

        // total amount
        uint finalAmount= borrowBalance[msg.sender] + intrest ;

        // Trasnfer Mock Dai tokens to this contract for repay
        daiToken.transferFrom(msg.sender, address(this), finalAmount);

        // Update borrowed balance
        borrowBalance[msg.sender] = 0 ;

        // Update borrowing status
        isBorrowing[msg.sender] = false;
        
    }


}