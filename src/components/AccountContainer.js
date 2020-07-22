import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  
  state = {
    transArray: []
  }
  
  componentDidMount() {
    fetch('http://localhost:6001/transactions')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          transArray: data
        })
      })
  }
  
  render() {
    console.log(this.state)
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transArray={this.state.transArray}/>
      </div>
    );
  }
}

export default AccountContainer;
