import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  addTransactionHandler = (e) => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) =>{
    const {date, description, category, amount} = this.state
    e.preventDefault();
    fetch('http://localhost:7000/transactions', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        date, 
        description,
        category,
        amount
      })
    })
    .then(res => res.json())
    .then(transaction => {
       this.props.addTransaction(transaction)
    })
    this.setState({
      date: '',
      description: '',
      category: '',
      amount: ''
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div className="ui segment">
        <form onSubmit={this.submitHandler} className="ui form">
          <div className="inline fields">
            <input onChange={this.addTransactionHandler} value={this.state.value} type="date" name="date" />
            <input onChange={this.addTransactionHandler} value={this.state.description} type="text" name="description" placeholder="Description" />
            <input onChange={this.addTransactionHandler} value={this.state.category} type="text" name="category" placeholder="Category" />
            <input
              onChange={this.addTransactionHandler}
              value={this.state.amount}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
