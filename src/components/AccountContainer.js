import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state={
    transactions:[]
  }
  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(resp=>resp.json())
    .then(transactions=>this.setState({transactions}))
  }

  handleNewTransaction=(newTransaction)=>{
    this.setState({transactions:[...this.state.transactions, newTransaction]})
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm handleNewTransaction={this.handleNewTransaction}/>
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
