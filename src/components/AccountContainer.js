import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from "./Sort"

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: "",
    deleted: []
  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
    .then(response => response.json())
    .then(transactions => {
      this.setState({ transactions })
    })
  }

  handleNewTransaction = (newTransaction) =>
    this.setState({transactions: [...this.state.transactions, newTransaction]})

  handleSearch = e => {
    this.setState({search: e.target.value})
  }

  handleDelete = id => {
    // console.log(id)
    fetch(`http://localhost:6001/transactions/${id}`,{
      method: 'DELETE'
    })
    .then(
      this.setState({deleted: [...this.state.deleted, id]}),
      // console.log(id)
    )
  }

  render() {
    console.log(this.state)
    let filteredTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
    // let deletedTransactions = this.state.transactions.id === this.state.deleted ? 
    return (
      <div>
        <Search handleSearch={this.handleSearch} search={this.state.search}/>
        <AddTransactionForm handleNewTransaction={this.handleNewTransaction}/>
        <Sort />
        <TransactionsList transactions={filteredTransactions} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default AccountContainer;
