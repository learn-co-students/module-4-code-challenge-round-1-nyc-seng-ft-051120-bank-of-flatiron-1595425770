import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from "./Sort";
const transactionsUrl = 'http://localhost:6001/transactions'
class AccountContainer extends Component {
  state={
    transactions: [],
    search: '',
    sortStatus: 'unsort'
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

  searchAndSortImplemented = () => {
    let filteredResults = [...this.state.transactions].filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
    if (this.state.sortStatus === 'unsort') {
      return filteredResults
    } else if (this.state.sortStatus === 'category') {
      return filteredResults.sort((trans1, trans2) => trans1.category.localeCompare(trans2.category))
    } else if (this.state.sortStatus === 'description') {
      return filteredResults.sort((trans1, trans2) => trans1.description.localeCompare(trans2.description))
    } 
    
  
  
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

  handleSort = event => {
    this.setState({ [event.target.name]: event.target.value})
  }


 
  render() {

    return (
      <div>
        <Sort sortStatus={this.state.sortStatus} handleSort={this.handleSort} />
        <Search handleSearch={this.handleSearch} search={this.state.search}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.searchAndSortImplemented()} removeTransaction={this.removeTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
