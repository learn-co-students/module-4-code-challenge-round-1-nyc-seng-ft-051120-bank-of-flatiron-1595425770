import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const BASE_URL = 'http://localhost:6001'

class AccountContainer extends Component {

  state = {
    transactions: []
  }

  componentDidMount(){
    this.getTransactions()
  }

  getTransactions = () => {
    fetch(BASE_URL+'/transactions')
    .then(r => r.json())
    .then(data => {
      this.setState({
        transactions: data
      })
    })
  }


  render() {
    console.log(this.state);
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


// See a table of the transactions.
// Fill out and submit the form to add a new transaction PERSIST TO BACKEND. 
// Filter transactions by typing into the search bar