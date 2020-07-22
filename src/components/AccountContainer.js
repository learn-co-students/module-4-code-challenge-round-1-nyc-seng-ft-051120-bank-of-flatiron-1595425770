import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: ''
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(data => this.setState({transactions: data}))
  }

  handleNewTrans = (newTrans) => {
    this.setState({transactions: [...this.state.transactions, newTrans]})
  }

  handleSearch = (filter) => {
    this.setState({search: filter})
  }

  render() {
    console.log(this.state)
    let filteredTrans = this.state.transactions.filter(tran => tran.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm handleNewTrans={this.handleNewTrans}/>
        <TransactionsList transactions={filteredTrans}/>
      </div>
    );
  }
}

export default AccountContainer;
