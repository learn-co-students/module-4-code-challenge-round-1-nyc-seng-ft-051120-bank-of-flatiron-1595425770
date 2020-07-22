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

  renderTransactions = () => {
    let sortedTrans = this.state.transactions.sort((a, b) => a.category < b.category ? -1 : 1)
    let filteredTransactions = sortedTrans.filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return <TransactionsList transactions={filteredTransactions} />
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
