import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    search: '',
    newTransaction: {
      date: '',
      description: '',
      category: '',
      amount: 0
    }
  }

  componentDidMount () {
    this.getAllTransactions()
  }
  getAllTransactions = () => {
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(transactions => {
      this.setState({ transactions: transactions })
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state.newTransaction)
    })
    .then(res => res.json())
    .then(newTransaction => {
      this.setState({transactions: [...this.state.transactions, newTransaction],
      newTransaction: {
        date: '',
        description: '',
        category: '',
        amount: 0
      }
      })
    })
  }
  handleChange = e => {
    this.setState ({
      newTransaction: { ...this.state.newTransaction, [e.target.name]: e.target.value}
    })
  }

  renderSearch = () => {
    let filterTransaction = this.state.transactions.filter(transaction => 
      transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
  }
  render() {
    // console.log(this.state);
    return (
      <div>
        <Search />
        <AddTransactionForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} newTransaction={this.state.newTransaction}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
