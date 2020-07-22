import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  handleChange = e => {
    this.setState( {[e.target.name]: e.target.value } )
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }, body: JSON.stringify(this.state)
    }).then(res => res.json())
    .then(newTransaction => {
      this.props.handleNewTransaction(newTransaction)
      this.setState( {
        date: '',
        description: '',
        category: '',
        amount: ''
      })
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
            <input type="text" name="description" placeholder="Description" onChange={this.handleChange} value={this.state.description}/>
            <input type="text" name="category" placeholder="Category" onChange={this.handleChange} value={this.state.category}/>
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
