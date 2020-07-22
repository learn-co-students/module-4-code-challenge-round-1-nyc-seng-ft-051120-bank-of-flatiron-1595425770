import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        {this.props.transactions.map(transaction => <TransactionsList key={transaction.id} {...transaction} />)}
      </div>
    );
  }
}

export default AccountContainer;
