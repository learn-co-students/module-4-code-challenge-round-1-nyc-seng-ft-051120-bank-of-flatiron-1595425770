import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API = 'http://localhost:6001/transactions'

class AccountContainer extends Component {
  state = {
    transactions:[],
    filter:""
  }

  componentDidMount(){
    fetch(API)
    .then(resp=>resp.json())
    .then(transactions => this.setState({transactions}))
  }

  filterTransactionsByDesc = ()=>{
      const filter = (this.state.filter).toLowerCase()
      return this.state.transactions.filter(t=> {
        const desc = t.description.toLowerCase()
        if(desc.includes(filter)){
          return t
        }
      })
  }

  filterHandler =(e)=>{
    this.setState({filter:e.target.value})
  }

  render() {
    const transactionsToBeDisplay = this.filterTransactionsByDesc()
    return (
      <div>
        <Search filter={this.state.filter} filterHandler={this.filterHandler}/>
        <AddTransactionForm />
        <TransactionsList transactions={transactionsToBeDisplay}/>
      </div>
    );
  }
}

export default AccountContainer;
