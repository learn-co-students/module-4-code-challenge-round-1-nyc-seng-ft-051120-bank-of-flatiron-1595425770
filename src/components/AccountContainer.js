import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const BASE_URL = 'http://localhost:6001'

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: ""
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

  handleSubmit = (e, transObj) => {
    e.preventDefault()
    console.log('in the submit', e.target, transObj);
    fetch(BASE_URL+'/transactions',{
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({
        date: transObj.date,
        description: transObj.description,
        category: transObj.category,
        amount: parseInt(transObj.amount)
      })
    })
    .then(this.getTransactions())
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }


  render() {
    console.log(this.state);
    let searchTransactions = this.state.transactions.filter(trans => trans.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm handleSubmit={this.handleSubmit}/>
        <TransactionsList transactions={searchTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;


// See a table of the transactions. √
// Fill out and submit the form to add a new transaction PERSIST TO BACKEND. 
// Filter transactions by typing into the search bar √