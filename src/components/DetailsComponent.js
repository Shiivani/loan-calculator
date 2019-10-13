import React from "react";
import { LoanConsumer } from '../context';

export default function Details(props) {
    
    return (
        
        <div className="details-container">
            <LoanConsumer>
            {(value) =>{
                return(
                    <>
                    <p className="interestRate">{value.loanDetails.interestRate}</p>
                    <p className="repayment">{value.monthlyPayment.amount}</p>
                    </>
                )
            }}
            
            </LoanConsumer>
        </div>
    )
}