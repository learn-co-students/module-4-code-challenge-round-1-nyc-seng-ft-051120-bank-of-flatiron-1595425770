import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchInput: ''
  }
  
  componentDidMount(){
    fetch('http://localhost:7000/transactions')
      .then(res => res.json())
      .then(transactions => {
        this.setState({ transactions })
      })
    
  }

  addTransaction = (transaction) =>{
    this.setState({
      transactions: [...this.state.transactions, transaction]
    })
  }

  searchHandler = (e) => {
    // console.log(e.target.value)
    this.setState({
      searchInput: e.target.value
    })
  }

  render() {
    let filteredTransactions = [...this.state.transactions]
    filteredTransactions = filteredTransactions.filter( transaction => 
      transaction.description.toLowerCase().includes(this.state.searchInput.toLowerCase()))
    return (
      <div>
        <Search 
        searchHandler={this.searchHandler}
        search={this.state.searchInput} />
        <AddTransactionForm 
        addTransaction={this.addTransaction} />
        <TransactionsList 
        transactions={filteredTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
