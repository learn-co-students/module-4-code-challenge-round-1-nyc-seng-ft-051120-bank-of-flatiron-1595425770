import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state={
    transactions: [],
    searchKeyword: ''
    }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(res=>res.json())
    .then(transactions=>{
      this.setState({transactions})
    })
  }
  addTransaction=newTransaction=>{
    this.setState({transactions: [...this.state.transactions, newTransaction]})
  }

  handleSearchChange=(e)=>{
    this.setState({searchKeyword: e.target.value})
  }
  renderSearchResult=()=>{
    return this.state.searchKeyword!==''? this.state.transactions.filter(transaction=>transaction.description.toLowerCase().includes(this.state.searchKeyword.toLowerCase())):this.state.transactions
  }
  handleDelete=(id)=>{
    fetch(`http://localhost:6001/transactions/${id}`,{method: "DELETE"})

    this.setState({transactions: [...this.state.transactions.filter(transition=> transition.id!==id)]})
  }

  render() {
    console.log(this.state.transactions)
    return (
      <div>
        <Search handleSearchChange={this.handleSearchChange}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.renderSearchResult()} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default AccountContainer;
