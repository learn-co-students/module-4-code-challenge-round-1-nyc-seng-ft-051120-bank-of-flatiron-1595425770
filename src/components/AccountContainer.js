import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    filtered: []
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
    let filteredState = this.state.transactions.descriptions.map(description => description.includes(searchTerm))
    this.setState({filter: filteredState})
  }
  

  render() {

    console.log(this.state.filter)
    return (
      <div>
        <Search search={this.state.search} handleSearch={this.handleSearch} />
        <AddTransactionForm addTransaction={this.addTransaction} />
        <TransactionsList transactions={this.state.transactions} filtered={this.state.filtered}/>
      </div>
    );
  }
}

export default AccountContainer;
