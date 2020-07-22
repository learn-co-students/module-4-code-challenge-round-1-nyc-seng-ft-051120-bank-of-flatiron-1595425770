import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    amount: "",
    category: "",
    date: "",
    description: ""
  }

  updateAmount = (e) => {
   this.setState({amount: e.target.value})
  }

  updateCategory = (e) => {
   this.setState({category: e.target.value})
  }

  updateDate = (e) => {
   this.setState({date: e.target.value})
  }

  updateDescription = (e) => {
   this.setState({description: e.target.value})
  }

  render() {
 console.log(this.state)
    return (
      <div className="ui segment">
        <form onSubmit={(e)=> this.props.postTransaction(e, this.state)}className="ui form">
          <div className="inline fields">
            <input onChange={this.updateDate} type="date" name="date" />
            <input onChange={this.updateDescription} type="text" name="description" placeholder="Description" />
            <input onChange={this.updateCategory} type="text" name="category" placeholder="Category" />
            <input onChange={this.updateAmount}
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
