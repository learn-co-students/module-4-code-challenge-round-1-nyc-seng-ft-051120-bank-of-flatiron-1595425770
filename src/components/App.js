// 7/22 JP Notes: Within TransactionsList: 
  // <tr>
    // <th>
  // <tr>
    // <td></td>    <--- I added this ?? 

  // Also with regards to Deliverable 3: I would have filtered by matching user input with keys / id in the db.. more notes throughout various component folders :)

import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {
  state = {
    transactions: [],
  }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(resp => resp.json())
    .then(transactions => this.setState({transactions}, console.log(transactions)))
  }

  handleNewTransaction = (newTransaction) => {
    this.state({transactions: [...this.state.transactions, newTransaction]})
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={this.state.transactions} handleNewTransaction={this.handleNewTransaction} />
      </div>
    );
  }
}

export default App;
