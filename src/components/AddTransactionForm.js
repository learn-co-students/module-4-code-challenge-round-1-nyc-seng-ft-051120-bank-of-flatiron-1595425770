import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  addTransactionHandler = (e) => {
    console.log('hi')
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input onChange={this.addTransactionHandler} type="date" name="date" />
            <input onChange={this.addTransactionHandler} type="text" name="description" placeholder="Description" />
            <input onChange={this.addTransactionHandler} type="text" name="category" placeholder="Category" />
            <input
              onChange={this.addTransactionHandler}
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
