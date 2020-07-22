// 7/22 JP Note: wrt: state.id??

import React, { Component } from "react";

class AddTransactionForm extends Component {
state = {
  id: "",
  date: "",
  description: "",
  category: "",
  amount: ""
}

// e.target.name  --->  keys
// e.target.value --->  values
handleChange = e => {
  this.setState( {[e.target.name]: e.target.value})
}

// handleNewTransaction function in App.js 
handleSubmit = e => {
  e.preventDefault()
  fetch("http://localhost:6001/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(this.state)
  })
  .then(resp => resp.json())
  .then(newTransaction => {
    this.props.handleNewTransaction(newTransaction)
    this.setState({
      id: "",
      date: "",
      description: "",
      category: "",
      amount: ""
    })
  })
}

  render() {
    return (
      <div className="ui segment">

        <form className="ui form" onSubmit={this.handleSubmit} >

          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
            <input type="text" name="description" value={this.state.description} placeholder="Description" onChange={this.handleChange} />
            <input type="text" name="category" value={this.state.category} placeholder="Category" onChange={this.handleChange} />
            <input
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
