import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: []
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(data => {
      this.setState({transactions: data})
    })
  }

  handleNewTransaction = (newTransaction) => {
    let newTransactionsArray = [...this.state.transactions, newTransaction]
    this.setState({transactions: newTransactionsArray})
  }

    render() {
      console.log(this.state)
    return (
      <div>
        <Search />
        <AddTransactionForm handleNewTransaction={this.handleNewTransaction}/>
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
