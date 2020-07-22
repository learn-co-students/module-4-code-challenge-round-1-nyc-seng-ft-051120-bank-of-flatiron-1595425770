import React, { Component } from "react";

class AddTransactionForm extends Component {
  state={newTransaction: {
    date: '',
    description: '',
    category: '',
    amount: 0
  }}
  handleChange=(e)=>{
    
    this.setState({newTransaction: {...this.state.newTransaction, [e.target.name]: e.target.value}})
  }
  handleSubmit=e=>{
    e.preventDefault()
    fetch('http://localhost:6001/transactions',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify(this.state.newTransaction)
    })
    .then(res=>res.json())
    .then(newTransaction=>this.props.addTransaction(newTransaction))
    this.setState({newTransaction: {
      date: '',
      description: '',
      category: '',
      amount: 0
    }})
  }
  render() {
    const {date, description, category, amount}=this.state.newTransaction
    
    return (
      
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.handleChange} value={date} onChange={this.handleChange}/>
            <input type="text" name="description" placeholder="Description" value={description} onChange={this.handleChange}/>
            <input type="text" name="category" placeholder="Category" value={category} onChange={this.handleChange}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={amount}
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
