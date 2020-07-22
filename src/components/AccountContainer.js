import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API = "http://localhost:6001/transactions"

class AccountContainer extends Component {
  state = {
    transaction: []
  }

  componentDidMount(){
    this.getTransactions()
  }

  getTransactions = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(transaction => this.setState({ transaction }))
  }
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transaction={this.state.transaction}/>
      </div>
    );
  }
}

export default AccountContainer;
