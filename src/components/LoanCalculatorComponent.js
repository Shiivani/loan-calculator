import React, { Component } from "react";
import InputRange from "react-input-range";
import Details from "./DetailsComponent";
import "react-input-range/lib/css/index.css";
import { LoanConsumer } from '../context';

class LoanCalculator extends Component {  
  
  render() {

    return (
      <div className="loan-container">
        <LoanConsumer>
        {(value) =>{
          const { amount, duration, handleAmountChange, handleDurationChange }= value;
          return(
            <div class="calculator">
            
          <InputRange
            step={100}
            maxValue={5000}
            minValue={500}
            value={amount}
            onChange={handleAmountChange}
          />
          <h4>Loan Amount ${amount}</h4>
          
          <InputRange
            step={1}
            maxValue={24}
            minValue={6}
            value={duration}
            onChange={handleDurationChange}
          />
          <h4>
            Over {duration} year{duration > 1 && "s"}
          </h4>
          <Details />
          </div>
          )
          
        }}
        
        </LoanConsumer>
      </div>
    );
  }
}

export default LoanCalculator;