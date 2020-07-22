import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: ""
  }

  fetchTransactions = () => {
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(transactionData => {
      this.setState({transactions: transactionData})
    })
  }

  componentDidMount() {
    this.fetchTransactions()
  }

  handleNewTransaction = transaction => {
    this.setState(prevState => {
      return {
        transactions: [...prevState.transactions, transaction]
      }
    })
  }

  handleSearchChange = event => {
    this.setState({search: event.target.value})
  }

  searchTransactions = transactions => {
    let result = transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return result
  }

  render() {
    let displayTransactions = this.state.transactions
    displayTransactions = this.searchTransactions(displayTransactions)
    return (
      <div>
        <Search handleSearchChange={this.handleSearchChange} search={this.state.search}/>
        <AddTransactionForm handleNewTransaction={this.handleNewTransaction}/>
        <TransactionsList transactions={displayTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
