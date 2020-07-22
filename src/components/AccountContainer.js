import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  
  state = {
    transArray: [],
    search: '',
    newTrans: {
      date: '',
      description: '',
      category: '',
      amount: '', 
    }
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

  handleSearchChange = e => {
    this.setState({
      search: e.target.value
    })
  }

  handleChange = e => {
    this.setState({
      newTrans: {
        ...this.state.newTrans,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json'
      },
      body: JSON.stringify(this.state.newTrans)
      })
      .then(resp => resp.json())
      .then(newTrans => {
        this.setState({
          transArray: [...this.state.transArray, newTrans],
          newTrans: {
            date: '',
            description: '',
            category: '',
            amount: '', 
          }

        })
      })
    
  }

  deleteTrans = (id) => {
    fetch(`http://localhost:6001/transactions/${id}`, {
      method: "DELETE"
    })
      this.setState({
        transArray: [...this.state.transArray.filter(trans => trans.id !== id)]
      })

  }
  
  render() {
    console.log(this.state)
    let searchedTrans = this.state.transArray.filter(trans => trans.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <Search 
          handleSearchChange={this.handleSearchChange}
          search={this.state.search}
          />
        <AddTransactionForm 
          newTrans={this.state.newTrans}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}

        />
        <TransactionsList 
        transArray={searchedTrans}
        deleteTrans={this.deleteTrans}
        />
      </div>
    );
  }
}

export default AccountContainer;
