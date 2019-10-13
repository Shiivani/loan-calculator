import React, { Component } from 'react';
import { LoanConsumer } from '../context';

export default class Data extends Component {
    
    
    render() {
        return(
            <LoanConsumer>
            { (list) => {
                const {dataList,fetchData,handleAmountChange, handleDurationChange}=list;
        
                if (dataList){
                    return (
                        
                        dataList.map((data) => {
                            return(
                            <button className="dataContainer" onClick={()=>{fetchData(data.principal.amount,data.numPayments); handleAmountChange(data.principal.amount); handleDurationChange(data.numPayments); }}>
                                
                                <h6>Amount: {data.principal.amount}</h6>
                                <h6>  Years: {data.numPayments}</h6>
                            </button>
                            )
                    })
                    
                    );
            }
            else{
                return null;
            }
            
    }}
        </LoanConsumer>
        )
       
    }
}
