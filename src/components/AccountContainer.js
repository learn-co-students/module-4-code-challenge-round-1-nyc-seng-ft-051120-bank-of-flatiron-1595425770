import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import Filter from "./Filter";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
   transactions: [],
   searchQuery: null
  }

setQuery = (e) => {
  this.setState({searchQuery: e.target.value})
  }

addTransaction = (transaction) => {
   this.setState ({transactions: [...this.state.transactions, transaction]})
}

postTransaction = (e, transaction) => {
  e.preventDefault()
  console.log(transaction)
  fetch('http://localhost:6001/transactions', {
    method: 'POST',
    headers: {
       'Content-Type': 'application/json',
       Accept: 'application/json'
    },
    body: JSON.stringify({
      amount: transaction.amount,
      category: transaction.category,
      date: transaction.date,
      description: transaction.description
    })
  })
  .then(res => res.json())
   .then(transaction => {
      this.addTransaction(transaction)
   })
}

fetchTransactions = () => {
   fetch('http://localhost:6001/transactions')
   .then(res => res.json())
   .then(data => {

     this.setState({transactions: data})
   })
}


componentDidMount(){
 this.fetchTransactions()
}

  render() {
  console.log(this.state)
    return (
      <div>
        <Search setQuery={this.setQuery}/>
         <Filter/>
        <AddTransactionForm postTransaction ={this.postTransaction}/>
        <TransactionsList transactions={this.state.transactions} searchQuery={this.state.searchQuery}/>
      </div>
    );
  }
}

export default AccountContainer;
