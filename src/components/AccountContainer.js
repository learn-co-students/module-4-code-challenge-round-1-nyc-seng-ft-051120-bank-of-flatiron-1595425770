import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactionsOG: [],
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  componentDidMount() {
    fetch(`http://localhost:6001/transactions`)
    .then(resp => resp.json())
    .then(arr => this.setState({ transactionsOG: arr}))
  } 
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addNewTrans = newTrans => {
    this.setState({
      transactionsOG: [...this.state.transactionsOG, newTrans]
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const newTrans = {
      date: this.state.date,
      description: this.state.description,
      category: this.state.category,
      amount: this.state.amount
    }

    fetch(`http://localhost:6001/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newTrans)
    })
      .then(resp => resp.json())
      .then(newTrans => {this.addNewTrans(newTrans)})
      .then( ()=> this.setState({date: '', description: '', category: '', amount: ''}))
  }

  arrayRender = () => {
    let arrayToReturn = this.state.transactionsOG.filter(transaction => {
      return(
        transaction
      )
    })
  }

  render() {
    // console.log(this.state.transactionsOG)
    return (
      <div>
        <Search />
        <AddTransactionForm 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange}
          date={this.state.date}
          description={this.state.description}
          category={this.state.category}
          amount={this.state.amount}/>
        <TransactionsList transactions = {this.state.transactionsOG}/>
      </div>
    );
  }
}

export default AccountContainer;
