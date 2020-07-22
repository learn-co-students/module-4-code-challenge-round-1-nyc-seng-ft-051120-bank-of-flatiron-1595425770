import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: "",
    sortBy: "description"
  }

  fetchTransactions = () => {
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(transactionData => {
      this.setState({transactions: transactionData})
    })
  }

  componentDidMount() {this.fetchTransactions()}

  handleNewTransaction = transaction => {
    this.setState(prevState => {
      return {
        transactions: [...prevState.transactions, transaction]
      }
    })
  }

  handleSearchChange = event => {this.setState({search: event.target.value})}

  searchTransactions = transactions => (
    transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
  )

  handleSortChange = event => {
    console.log(event.target.value)
    this.setState({sortBy: event.target.value})
  }

  sortTransaction = (transactions) => (
    transactions.sort((a,b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
  )


  deleteTransaction = id => {
    // fetch('http://localhost:6001/transactions'.concat('/id'))
    console.log('http://localhost:6001/transactions'.concat(`/${id}`),{
      method: "DELETE",
      
    })

  }
  render() {
    // console.log(this.state.sortBy)
    let displayTransactions = this.state.transactions
    displayTransactions = this.searchTransactions(displayTransactions)
    displayTransactions = this.sortTransaction(displayTransactions)
    return (
      <div>
        <Search handleSearchChange={this.handleSearchChange} search={this.state.search}/>
        <AddTransactionForm handleNewTransaction={this.handleNewTransaction}/>
        <TransactionsList transactions={displayTransactions} handleSortChange={this.handleSortChange} sortBy={this.state.sortBy} deleteTransaction={this.deleteTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
