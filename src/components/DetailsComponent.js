import React from "react";
import { LoanConsumer } from '../context';

export default function Details(props) {
    
    return (
        
        <div className="details-container">
            <LoanConsumer>
            {(value) =>{
                return(
                    <>
                    <h6 className="interestRate">Interest Rate:- <span className="blue">{value.loanDetails.interestRate}</span></h6>
                    <h6 className="repayment">Monthly Payment:- <span className="blue">${value.monthlyPayment.amount}</span></h6>
                    </>
                )
            }}
            
            </LoanConsumer>
        </div>
    )
}