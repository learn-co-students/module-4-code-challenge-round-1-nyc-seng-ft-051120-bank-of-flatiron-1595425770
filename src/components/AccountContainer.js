import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: ''
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(data => this.setState({transactions: data}))
  }

  handleNewTrans = (newTrans) => {
    this.setState({transactions: [...this.state.transactions, newTrans]})
  }

  handleSearch = (filter) => {
    this.setState({search: filter})
  }

  handleDelete = (id) => {
    fetch(`http://localhost:6001/transactions/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(() => {
      let newTrans = this.state.transactions.filter(tran => tran.id !== id)
      this.setState({transactions: newTrans})
    })
  }

  render() {
    console.log(this.state)
    let filteredTrans = this.state.transactions.filter(tran => tran.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm handleNewTrans={this.handleNewTrans}/>
        <TransactionsList transactions={filteredTrans} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default AccountContainer;
