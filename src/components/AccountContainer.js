import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state={
    transactions:[]
  }
  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(resp=>resp.json())
    .then(transactions=>this.setState({transactions}))
  }
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
