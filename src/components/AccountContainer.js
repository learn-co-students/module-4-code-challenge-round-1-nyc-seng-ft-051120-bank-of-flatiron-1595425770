import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const transactionsUrl = 'http://localhost:6001/transactions';
class AccountContainer extends Component {
  state ={
    transactions:[]
  }
  componentDidMount(){
  fetch(transactionsUrl)
  .then(response => response.json())
  .then(data => { 
    this.setState({
        transactions: data
    })
    
  })}
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions}/>
        
      </div>
    );
  }
}

export default AccountContainer;
