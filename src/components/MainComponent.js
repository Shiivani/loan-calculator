import React, { Component } from 'react';
import LoanCalculator from './LoanCalculatorComponent';
import Header from './HeaderComponent';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
               <LoanCalculator/>
            </div>
        )
    }
}
