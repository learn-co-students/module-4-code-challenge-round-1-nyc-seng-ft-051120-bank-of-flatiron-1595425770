import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions : [],
    search : ""
  }

  componentDidMount= () => {
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(transactions => this.setState({ transactions }))
  }

  createNewTransaction = (newTransaction) => {
    this.setState({ transactions : [...this.state.transactions, newTransaction]})
  }

  handleChange = e => {
    this.setState({ search : e.target.value })
  }
  
  render() {
    const filteredTransactions = this.state.transactions.filter(transaction =>
      transaction.description.includes(this.state.search))
    
      return (
      <div>
        <Search onChange={this.handleChange} />
        <AddTransactionForm addNewTransaction={this.createNewTransaction}/>
        <TransactionsList transactions={filteredTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
