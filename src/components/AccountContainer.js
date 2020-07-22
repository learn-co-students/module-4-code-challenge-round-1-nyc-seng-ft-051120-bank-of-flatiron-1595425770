import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    filteredTransactions: []
  }

  fetchTransactions = () => {
    fetch(`http://localhost:6001/transactions`)
    .then(resp => resp.json())
    .then(transactions => 
      this.setState({
        transactions: transactions,
        filteredTransactions: transactions
      })
      )
  }

  componentDidMount(){
    this.fetchTransactions()

  }

  filterTransactionsMethod = (filter) => {
    let filteredTransactions = this.state.transactions
    filteredTransactions = filteredTransactions.filter((transaction) => {
      let description = transaction.description.toLowerCase()
        return description.indexOf(
          filter.toLowerCase()) !== -1}
        )
        this.setState({
          filteredTransactions
        })
  }
    

  handleNewTransaction = (transaction) => {
    this.setState(prevState => {
      return {transactions: [...prevState.transactions, transaction]}
    })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <Search onChange={this.filterTransactionsMethod}/>
        <AddTransactionForm handleNewTransaction={this.handleNewTransaction}/>
        <TransactionsList transactionsArray={this.state.filteredTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;

// onChange needs to equal filterTransactionMethod in the end