import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: 0
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleAmount = (e) => {
    this.setState({[e.target.name]: parseInt(e.target.value)})
  }

  handleSubmit = (e) => {
    let newTrans = this.state
    e.preventDefault()
    fetch(`http://localhost:6001/transactions`, {
      method: 'POST',
      body: JSON.stringify(newTrans),
      headers: {"Content-type": "application/json"}
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.props.addTransaction(data)
    })

    this.setState({
      date: "",
      description: "",
      category: "",
      amount: 0
    })
  }

   render() {
  //   console.log(this.state)
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder="Description" />
            <input type="text" name="category" value={this.state.category} onChange={this.handleChange} placeholder="Category" />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.handleAmount}
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
