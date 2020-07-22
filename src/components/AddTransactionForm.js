import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: ""
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  

  render() {
    console.log(this.state);
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={(e) => this.handleChange(e)}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={(e) => this.handleChange(e)}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={(e) => this.handleChange(e)}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={(e) => this.handleChange(e)}
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
