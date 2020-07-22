import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: ""
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(res =>  res.json())
    .then(data => {
      // console.log(data)
      this.setState({transactions: data})
    })
  }

  addTransaction = (transaction) => {
    console.log("transaction: ", transaction)
    this.setState({transactions: [...this.state.transactions, transaction]})
  }

  handleSearch = (searchTerm) => {
    let filteredState = this.state.transactions.filter(transaction => transaction.description.includes(searchTerm))
    this.setState({transactions: filteredState})
  }
  

  render() {

    // console.log(this.state)
    return (
      <div>
        <Search search={this.state.search} handleSearch={this.handleSearch} />
        <AddTransactionForm addTransaction={this.addTransaction} />
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
