import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Transaction from "./Transaction";

class AccountContainer extends Component {
  state={
    transactions:[],
    search: ''
  }
  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(resp=>resp.json())
    .then(transactions=>this.setState({transactions}))
  }

  handleNewTransaction=(newTransaction)=>{
    this.setState({transactions:[...this.state.transactions, newTransaction]})
  }

  handleSearch=(e)=>this.setState({search:e.target.value})

  deleteTransaction=(TransactionId)=>{
    fetch(`http://localhost:6001/transactions/${TransactionId}`,{
      method: 'DELETE',
      headers: {
        "content-type": 'application/json',
        accept: 'application/json'
      }
    })
    .then(resp=>resp.json())
    .then(()=>{
      let revisedTransactionList= this.state.transactions.filter(transaction=>transaction.id !== TransactionId)
      this.setState({transactions: revisedTransactionList})
    })
  }

  render() {
    let searchedTransaction=this.state.transactions.filter(transaction=>transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <Search search={this.state.search} handleSearch={this.handleSearch}/>
        <AddTransactionForm handleNewTransaction={this.handleNewTransaction}/>
        <TransactionsList transactions={searchedTransaction} deleteTransaction={this.deleteTransaction} />
      </div>
    );
  }
}

export default AccountContainer;
