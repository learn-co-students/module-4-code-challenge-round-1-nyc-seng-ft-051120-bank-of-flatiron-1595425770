import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const transactionsUrl = 'http://localhost:6001/transactions'
class AccountContainer extends Component {
  state={
    transactions: [],
    search: ''
  }

  componentDidMount(){
    this.fetchTransactions()
  }

  fetchTransactions = () => {
    fetch(transactionsUrl)
    .then(res=>res.json())
    .then(transactions => this.setState({transactions}))
  }

  addTransaction = newTransaction => {
    this.setState({ transactions: [...this.state.transactions, newTransaction]}, () => console.log(this.state.transactions))

  }

  handleSearch = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  searchImplemented = () => {
    return [...this.state.transactions].filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  render() {

    return (
      <div>
        <Search handleSearch={this.handleSearch} search={this.state.search}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.searchImplemented()}/>
      </div>
    );
  }
}

export default AccountContainer;
