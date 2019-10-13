import React, { Component } from 'react';
import LoanCalculator from './LoanCalculatorComponent';
import Header from './HeaderComponent';
import Data from './DataComponent';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="home-container">
               <LoanCalculator/> 
               <div class="data-wrapper">    
                <Data/>
                </div>
                </div>
            </div>
        )
    }
}
