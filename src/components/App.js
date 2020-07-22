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

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;
