import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    allTrans: [],
    search: '',
  }

  searchValue = (value) => {
    this.setState({ search: value})
  }

componentDidMount(){
  fetch('http://localhost:6001/transactions')
  .then(resp => resp.json())
  .then(data => {
    this.setState({allTrans: data})
  })
}

addNewTrans = (newTrans) => {
this.setState({allTrans: [...this.state.allTrans, newTrans]})
}
  
  render() {
  let searchedTrans = this.state.allTrans.filter(trans =>
    trans.description.toLowerCase().includes(this.state.search.toLowerCase()))

    return (
      <div>
        <Search searchValue={this.searchValue}/>
        <AddTransactionForm addNew={this.addNewTrans}/>
        <TransactionsList allTrans={searchedTrans}/>
      </div>
    );
  }
}

export default AccountContainer;
