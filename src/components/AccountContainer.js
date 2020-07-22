import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const transactionsUrl = 'http://localhost:6001/transactions'
class AccountContainer extends Component {
  state={
    transactions: []
  }

  componentDidMount(){
    this.fetchTransactions()
  }

  fetchTransactions = () => {
    fetch(transactionsUrl)
    .then(res=>res.json())
    .then(transactions => this.setState({transactions}))
  }

  addTransaction = newTransaction => {
    this.setState({ transactions: [...this.state.transactions, newTransaction]}, () => console.log(this.state.transactions))

  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
