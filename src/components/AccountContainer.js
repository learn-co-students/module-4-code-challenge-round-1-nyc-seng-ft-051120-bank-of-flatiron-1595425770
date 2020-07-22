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

  removeTransaction = (id) => {
    fetch(transactionsUrl.concat(`/${id}`), {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application.json'
    }})
    .then(emptyData => {
      let newTs = this.state.transactions.filter(transaction => transaction.id != id)
      this.setState({transactions: newTs}, ()=>console.log(this.state.transactions))
    })
  }

  render() {

    return (
      <div>
        <Search handleSearch={this.handleSearch} search={this.state.search}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.searchImplemented()} removeTransaction={this.removeTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
