import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Transaction from "./Transaction";

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

  deleteTransaction = transactionId => {
    fetch(`http://localhost:6001/transactions/${transactionId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(res => res.json())
    .then(() => {
      let newTransactionsArray = this.state.transactions.filter(transaction => transaction.id !== transactionId)
      this.setState({transactions: newTransactionsArray})
    })
  }

  renderTransactions = () => {
    let sortedTrans = this.state.transactions.sort((a, b) => a.category < b.category ? -1 : 1)
    let filteredTransactions = sortedTrans.filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return <TransactionsList transactions={filteredTransactions} deleteTransaction={this.deleteTransaction}/>
  }

    render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm handleNewTransaction={this.handleNewTransaction}/>
        {this.renderTransactions()}
      </div>
    );
  }
}

export default AccountContainer;
