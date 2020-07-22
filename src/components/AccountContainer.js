import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


const URL = "http://localhost:6001/transactions"
class AccountContainer extends Component {

  state = {
    transactions: [],
    date: "",
    description: "",
    category: "",
    amount: 0
  }

  componentDidMount() {
    this.getTransactions()
  }

  getTransactions = async () => {
    const transactions = await (await fetch(URL, { method: "GET" })).json();
    this.setState({ transactions });
  }

  handleChange = e => {
    this.setState({[e.target.name]:  e.target.value});
  }

  postTransaction = async e => {
    e.preventDefault();
    const { date, description, category, amount, transactions } = this.state;
    
    const result = await (await fetch(URL,
      { method: "POST",
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ date, description, category, amount })
      }
    )).json()

    this.setState({transactions: [...transactions, result] }) ;
  }


  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm postTransaction={this.postTransaction} handleChange={this.handleChange} accState={this.state}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
