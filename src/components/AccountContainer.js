import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: []
  }

  fetchTransactions = () => {
    fetch(`http://localhost:6001/transactions`)
    .then(resp => resp.json())
    .then(transactions => 
      this.setState({
        transactions
      })
      )
  }

  componentDidMount(){
    this.fetchTransactions()
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactionsArray={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
