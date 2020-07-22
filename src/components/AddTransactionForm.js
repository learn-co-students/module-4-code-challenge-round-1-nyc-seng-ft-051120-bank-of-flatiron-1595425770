import React, { Component } from "react";

class AddTransactionForm extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.props.handleSubmit}>
          <div className="inline fields">
              <input type="date" name="date" onChange={this.props.handleChange} value={this.props.newTrans.date}/>
            <input type="text" name="description" onChange={this.props.handleChange} value={this.props.newTrans.description} placeholder="Description" />
            <input type="text" name="category" onChange={this.props.handleChange} value={this.props.newTrans.category} placeholder="Category" />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              onChange={this.props.handleChange}
              value={this.props.newTrans.amount}
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
