import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const BASE_URL = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: "", 
    date: "",
    description: "",
    category: "",
    amount: ""
  }

  componentDidMount(){
    this.getTransactions()
  }

  getTransactions = () => {
    fetch(BASE_URL)
    .then(r => r.json())
    .then(data => {
      this.setState({
        transactions: data
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  // could've refactored this to let the fetch call be its own function but ran out of time
  handleSubmit = (e, transObj) => {
    e.preventDefault()
    fetch(BASE_URL,{
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({
        date: transObj.date,
        description: transObj.description,
        category: transObj.category,
        amount: parseFloat(transObj.amount)
      })
    })
    .then(r => r.json())
    .then(trans => {
      this.setState({
        transactions: [...this.state.transactions, trans]
      })
    })
    .then(this.setState({
      date: "",
      description: "",
      category: "",
      amount: ""
    }))
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  // same refactor comment here 
  handleClick = (e, transId) => {
    fetch(BASE_URL+`/${transId}`,{
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(this.getTransactions())
    
  }

  render() {
    let searchTransactions = this.state.transactions.filter(trans => trans.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm 
        handleSubmit={this.handleSubmit} 
        handleChange={this.handleChange}
        date={this.state.date} 
        description={this.state.description}
        category={this.state.category}
        amount={this.state.amount}
        />
        <TransactionsList 
        transactions={searchTransactions}
        handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default AccountContainer;


// See a table of the transactions. √
// Fill out and submit the form to add a new transaction PERSIST TO BACKEND. √
// Filter transactions by typing into the search bar √