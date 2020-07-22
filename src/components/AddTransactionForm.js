import React, { Component } from "react";

const initialState={
  date:'',
  description:'',
  category:'',
  amount:''
}
class AddTransactionForm extends Component {
  
  state=initialState

  handleInput=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    fetch('http://localhost:6001/transactions',{
      method: 'POST',
      headers: {
        "content-type": 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      })
    })
    .then(resp=>resp.json())
    .then(newTransaction=>{
      this.setState(initialState)
      this.props.handleNewTransaction(newTransaction)
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" >
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleInput}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleInput}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleInput}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.handleInput}
            />
          </div>
          <button className="ui button" type="submit" onClick={this.handleSubmit}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
