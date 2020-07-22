import React, { Component } from "react";
const initialState={
  date: null,
  description: '',
  category: '',
  amount: ''
}
const transactionsUrl = 'http://localhost:6001/transactions'
class AddTransactionForm extends Component {
  state=initialState

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const { date, description, category } = this.state
    fetch(transactionsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        date,
        description,
        category,
        amount: parseInt(this.state.amount)
      })
    })
    .then(res=>res.json())
    .then(newT => {
      this.props.addTransaction(newT)
      this.setState(initialState)
    })

  }
 
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.name} onChange={this.inputChange}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.inputChange}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.inputChange}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount} 
              onChange={this.inputChange}
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
