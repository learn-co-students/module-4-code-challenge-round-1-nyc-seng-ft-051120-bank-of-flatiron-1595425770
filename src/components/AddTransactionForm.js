import React, { Component } from "react";

const initialState = {
  date: "",
  description: "",
  category: "",
  amount: 0
}

class AddTransactionForm extends Component {
  state = initialState

  incomingChange = e => {
    this.setState({ [e.target.name] : e.target.value })
  }

  submitForm = e => {
    let { date, description, category, amount } = this.state
    e.preventDefault()
    fetch('http://localhost:6001/transactions', {
      method : 'POST',
      headers: {
        'Content-Type' : "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        date,
        description,
        category,
        amount
      })
    })
    .then(resp => resp.json())
    .then(newTransaction => {
      this.setState(initialState)
      this.props.addNewTransaction(newTransaction)
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.submitForm}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.incomingChange} value={this.state.date}/>
            <input type="text" name="description" placeholder="Description" onChange={this.incomingChange} value={this.state.description}/>
            <input type="text" name="category" placeholder="Category" onChange={this.incomingChange} value={this.state.category}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.incomingChange} 
              value={this.state.amount}
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
