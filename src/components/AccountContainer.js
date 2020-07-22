import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

// 7/22 JP Notes: I spoke to Sean and confirmed that I needed to pass the state one more level and render transactions in the transaction component. 
  // If given more time, my next steps would be to change the TransactionsList.js back to a functional component and render transactions in the Transactions component. 

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm handleNewTransaction={this.props.handleNewTransaction}/>
        {this.props.transactions.map(transaction => <TransactionsList key={transaction.id} {...transaction} />)}
      </div>
    );
  }
}

export default AccountContainer;
