import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: "",
    sortBy: "None"
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(resp=>resp.json())
    .then(transactions=> this.setState({transactions}))
  }

  handleNewTransaction = (newTransaction) => {
    this.setState({transactions: [...this.state.transactions, newTransaction]})
  }

  deleteTransaction = (transactionId) => {
    fetch(`http://localhost:6001/transactions/${transactionId}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    .then(resp=>resp.json())
    .then(()=> {
      let newTransactionsArray = this.state.transactions.filter(transaction=>transaction.id !== transactionId)
      this.setState({transactions: newTransactionsArray})
    })
  }

  handleSearchChange = e => {
    this.setState({search: e.target.value})
  }

  handleSortChoice = e => {
    this.setState({sortBy: e.target.value})
  }

  sortedTransactions = () => {
    let sortedTransactions = [...this.state.transactions]
    if (this.state.sortBy === 'None'){
      return sortedTransactions
    } else if (this.state.sortBy === 'Category') {
      return sortedTransactions.sort((a,b)=> a.category.localeCompare(b.category))
      // return sortedTransactions.sort((a,b)=> a.category > b.category ? 1 : -1)
    } else if (this.state.sortBy === 'Description') {
      return sortedTransactions.sort((a,b)=> a.description.localeCompare(b.description))
      // return sortedTransactions.sort((a,b)=> a.description > b.description ? 1 : -1)
    }
  }

  render() {
    let filteredTransactions= this.sortedTransactions().filter(transaction=> transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
    // let filteredTransactions= this.state.transactions.filter(transaction=> transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <div className="sort">
          <h3>Sort Transactions By:</h3>
          <select className="dropdown" value={this.state.sortBy} onChange={this.handleSortChoice}> 
            <option className="dropdown" value="None">None</option>
            <option className="dropdown" value="Category">Category</option>
            <option className="dropdown" value="Description">Description</option>
          </select>
        </div> 
        <h3>💰 💲 💵  💲 💰 💲 💵  💲💰 💲 💵  💲💰 💲 💵  💲</h3>
        <Search search={this.state.search} handleChange={this.handleSearchChange}/>
        <AddTransactionForm handleNewTransaction={this.handleNewTransaction}/>
        <TransactionsList transactions={filteredTransactions} delete={this.deleteTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
