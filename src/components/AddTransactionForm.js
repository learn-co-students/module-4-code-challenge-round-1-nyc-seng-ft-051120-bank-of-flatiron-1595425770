import React, { Component } from "react";



const initialState = {
            date: "",
            description: "",
            category: "",
            amount: 0
}

class AddTransactionForm extends Component {
  state = initialState

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    let {date, description, category, amount} = this.state

    fetch('http://localhost:6001/transactions',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({date, description, category, amount})
    })
    .then(resp => resp.json())
    .then(newTrans => {
      this.props.handleNewTransaction(newTrans)
      this.setState(initialState)
    })
  }

  render() {
    // console.log(this.state)
    let {date, description, category, amount} = this.state
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input onChange={this.handleChange} type="date" name="date" value={date}/>
            <input onChange={this.handleChange} type="text" name="description" placeholder="Description" value={description}/>
            <input onChange={this.handleChange} type="text" name="category" placeholder="Category" value={category}/>
            <input
              onChange={this.handleChange}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={amount}
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
