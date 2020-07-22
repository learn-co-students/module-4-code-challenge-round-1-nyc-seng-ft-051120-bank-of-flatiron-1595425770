import React, { Component } from "react";

let initialState = {
  date: "",
  description: "",
  category: "",
  amount: 0
}

class AddTransactionForm extends Component {

  state = initialState

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let { date, description, category, amount } = this.state 
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(
        { date, description, category, amount }
      )
    }).then(resp => resp.json())
    .then(transaction => {
      this.setState(initialState);
      this.props.handleNewTransaction(transaction)})
  }

  render() {
    console.log(this.state)
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input onChange={this.handleChange}type="date" name="date" value={this.state.date}/>
            <input onChange={this.handleChange} type="text" name="description" placeholder="Description" value={this.state.description}/>
            <input onChange={this.handleChange} type="text" name="category" placeholder="Category" value={this.state.category}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.handleChange}
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
