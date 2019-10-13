import React, { Component } from 'react';

const LoanContext = React.createContext();
//Provider
//Consumer

class LoanProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            amount: 500,
            duration: 6,
            isLoaded: false,
            loanDetails:{},
            monthlyPayment:{}
        }
    }
    
    componentDidMount() {
        this.fetchData(this.state.amount,this.state.duration);
    }
    fetchData(amount,duration){
        fetch(`https://ftl-frontend-test.herokuapp.com/interest?amount=${amount}&numMonths=${duration}`)
        .then(res=>res.json())
        .then(
            
            (results) => {
                this.setState({
                    isLoaded: true,
                    loanDetails: results,
                    monthlyPayment:results.monthlyPayment
                });
            },
            (error) => {
                this.setState({
                    isLoaded:true,
                    error
                });
            }
            
        )
    }

    handleAmountChange = value => {
        this.setState({ amount: value },()=>{this.fetchData(this.state.amount,this.state.duration);});
      };

      handleDurationChange = value => {
        this.setState({ duration: value },()=>{this.fetchData(this.state.amount,this.state.duration);});
      };


    render() {
        return (
            <LoanContext.Provider value={{
                amount:this.state.amount,
                duration: this.state.duration,
                isLoaded: this.state.isLoaded,
                loanDetails:this.state.loanDetails,
                monthlyPayment:this.state.monthlyPayment,
                handleAmountChange:this.handleAmountChange,
                handleDurationChange: this.handleDurationChange
                }}>
               { this.props.children } 
            </LoanContext.Provider>
        )
    }
}

const LoanConsumer = LoanContext.Consumer;
export { LoanProvider, LoanConsumer };