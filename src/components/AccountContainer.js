import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchInput: '',
    sortInput: ''
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
    this.setState({
      searchInput: e.target.value
    })
  }

  sortHandler = (e) => {
    this.setState({
      sortInput: e.target.value
    })
  }
  

//Ran out of time!
  // deleteHandler = (id) => {
  //   console.log('hi')
  //   fetch(`http://localhost:7000/transactions/${id}` , {
  //     method: 'DELETE',
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   .then(res => res.json())
  //   .then( data => {
  //     //  this.state.transactions.filter(transaction => transaction.id !== data.id )
  //   })
    
  //  }

  render() {
    let filteredTransactions = [...this.state.transactions]
    
    filteredTransactions = filteredTransactions.filter( transaction => 
      transaction.description.toLowerCase().includes(this.state.searchInput.toLowerCase()))
    
    if(this.state.sortInput === 'alphabetically'){
      filteredTransactions.sort((a,b) => (a.description > b.description ? 1 : -1 ))
    }
    else if(this.state.sortInput === 'category'){
      filteredTransactions.sort((a,b) => (a.category > b.category ? 1 : -1 ))
    }
    else if(this.state.sortInput === 'amount'){
      filteredTransactions.sort((a,b) => (a.amount > b.amount ? 1 : -1 ))
    }
    
    return (
      <div>
        <Search 
        searchHandler={this.searchHandler}
        search={this.state.searchInput}
        sortHandler={this.sortHandler}  />

        <AddTransactionForm 
        addTransaction={this.addTransaction} />

        <TransactionsList 
        transactions={filteredTransactions}
        delete={this.deleteHandler} />
      </div>
    );
  }
}

export default AccountContainer;
