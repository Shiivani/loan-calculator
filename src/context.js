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
            monthlyPayment:{},
            dataList: [],
        }
    }
    componentDidMount() {
        this.fetchData(this.state.amount,this.state.duration);
    }
    fetchData=(amount,duration)=>{
        fetch(`https://ftl-frontend-test.herokuapp.com/interest?amount=${amount}&numMonths=${duration}`)
        .then(res=>res.json())
        .then(
            (results) => {
                this.setState({
                    isLoaded: true,
                    loanDetails: results,
                    monthlyPayment:results.monthlyPayment
                },()=>{
                    const jsonObj=localStorage.getItem('storeDetails');
                    const ls =JSON.parse(jsonObj);
                    const list = (ls != null) ? [...ls,this.state.loanDetails] : [this.state.loanDetails];
                    localStorage.setItem('storeDetails',JSON.stringify(list));
                    this.setState({
                        dataList: list
                    })
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
                dataList: this.state.dataList,
                monthlyPayment:this.state.monthlyPayment,
                handleAmountChange:this.handleAmountChange,
                handleDurationChange: this.handleDurationChange,
                fetchData: this.fetchData,
                }}>
               { this.props.children } 
            </LoanContext.Provider>
        )
    }
}

const LoanConsumer = LoanContext.Consumer;
export { LoanProvider, LoanConsumer };