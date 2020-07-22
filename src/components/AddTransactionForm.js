import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.props.handleSubmit} className="ui form">
          <div className="inline fields">
            <input type="date" name="date" onChange={this.props.handleChange} value={this.props.newTransaction.date} />
            <input type="text" name="description" onChange={this.props.handleChange} placeholder="Description" value={this.props.newTransaction.description} />
            <input type="text" name="category" onChange={this.props.handleChange} placeholder="Category" value={this.props.newTransaction.category} />
            <input
              type="number"
              name="amount"
              onChange={this.props.handleChange}
              placeholder="Amount"
              value={this.props.newTransaction.amount}
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
