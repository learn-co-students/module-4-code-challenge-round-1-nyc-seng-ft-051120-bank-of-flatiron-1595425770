import React, { Component } from "react";


const initialState = {
date: '',
description: "",
category: "",
amount: 0
}


class AddTransactionForm extends Component {
  state = initialState
  

  handleChange = (e) => {
  this.setState({ [e.target.name] :e.target.value})
  }

  handleSubmit = e => {
    let {date, description, category, amount} =this.state
    e.preventDefault()
    fetch('http://localhost:6001/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      date: parseInt(date),
      description: description,
      category: category,
      amount: parseInt(amount)
     })
    })
    .then(res => res.json())
    .then( data => {
      this.setState(initialState)
      this.props.addNew(data)
    })
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.handleChange} value={this.state.date}/>
            <input type="text" name="description" placeholder="Description" onChange={this.handleChange} value={this.state.description}/>
            <input type="text" name="category" placeholder="Category" onChange={this.handleChange} value={this.state.category}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.handleChange} 
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
