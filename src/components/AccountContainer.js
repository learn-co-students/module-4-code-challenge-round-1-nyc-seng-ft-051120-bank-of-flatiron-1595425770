import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    search: ''
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(data => {
      this.setState({transactions: data})
    })
  }

  handleNewTransaction = (newTransaction) => {
    let newTransactionsArray = [...this.state.transactions, newTransaction]
    this.setState({transactions: newTransactionsArray})
  }

  handleSearch = e => {
    this.setState({search: e.target.value})
  }

    render() {
     let filteredTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm handleNewTransaction={this.handleNewTransaction}/>
        <TransactionsList transactions={filteredTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
