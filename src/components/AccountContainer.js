import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API = 'http://localhost:6001/transactions'
const transactionFormFieldsInitialState={
  date:"",
  description:"",
  category:"",
  amount:""
}


class AccountContainer extends Component {
  state = {
    transactions:[],
    filter:"",
    transactionFormFields: {...transactionFormFieldsInitialState}
  }

  componentDidMount(){
    fetch(API)
    .then(resp=>resp.json())
    .then(transactions => this.setState({transactions}))
  }

  filterTransactionsByDesc = ()=>{
      const filter = (this.state.filter).toLowerCase()
      return this.state.transactions.filter(t=> {
        const desc = t.description.toLowerCase()
        if(desc.includes(filter)){
          return t
        }
      })
  }

  filterHandler =(e)=>{
    this.setState({filter:e.target.value})
  }
  transactionFormchangeHandler=(e)=>{
    const field = e.target.name 
    const value = e.target.value

    this.setState( prevState=>{
      const newformState = {...prevState.transactionFormFields}
      newformState[field] =value
      return Object.assign({},prevState,{transactionFormFields:newformState}) 
    })

  }

  transactionFormSubmitHandler = (e)=>{
    e.preventDefault()
    const ServerData = {
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body:JSON.stringify(this.state.transactionFormFields)
    }

    fetch(API,ServerData)
    .then(resp=>resp.json())
    .then(newTransaction=>{
        this.setState({transactions:[...this.state.transactions,newTransaction]})
    })
  }

  render() {
    const transactionsToBeDisplay = this.filterTransactionsByDesc()
    return (
      <div>
        <Search filter={this.state.filter} filterHandler={this.filterHandler}/>
        <AddTransactionForm 
          formChangeHandler={this.transactionFormchangeHandler}
          formSubmitHandler={this.transactionFormSubmitHandler}
          {...this.state.transactionFormFields}
        />
        <TransactionsList transactions={transactionsToBeDisplay}/>
      </div>
    );
  }
}

export default AccountContainer;
