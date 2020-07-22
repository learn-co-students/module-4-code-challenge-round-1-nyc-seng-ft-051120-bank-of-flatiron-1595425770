import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';
import AddTransactionForm from './AddTransactionForm';

class AccountContainer extends Component {
	state = {
    bank: [],
    search:''
	};

	componentDidMount() {
		fetch('http://localhost:3000/transactions')
			.then(resp => resp.json())
			.then(data => this.setState({ bank: data }));
	}

	handleFrontEnd = d => {
		this.setState({ bank: [...this.state.bank, d] });
  }
  
  doSearch = e => {
    console.log(e.target.value)
    this.setState({search: e.target.value})
  }

  render() {
    let searchBy = this.state.bank.filter(bank =>
      bank.description.toLowerCase().includes(this.state.search.toLowerCase())
      )
		return (
			<div>
        <Search
          search={this.state.search}
          doSearch={this.doSearch} />
				<AddTransactionForm handleFrontEnd={this.handleFrontEnd} />
        <TransactionsList
          search={searchBy}
          transactions={this.state.bank} />
			</div>
		);
	}
}

export default AccountContainer;
