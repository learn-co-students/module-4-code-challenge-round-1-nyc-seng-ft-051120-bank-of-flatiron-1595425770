import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

    state = {
        transactions: [],
        searchTerm: ''
    }

    fetchData = () => {
        fetch('http://localhost:6001/transactions')
            .then(r => r.json())
            .then(transactions => {
                this.setState({ transactions })
            })
    }

    componentDidMount() {
        this.fetchData()
    }

    handleSearch = (searchWord) => {
        this.setState({ searchTerm: searchWord })
    }

    handleDelete = (id) => {
        const options = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },

        }

        fetch(`http://localhost:6001/transactions/${id}`, options)
        .then(r => r.json())
        .then(this.fetchData)
    }


    render() {
        //console.log(this.state.transactions)
        const filteredTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        return (
            <div>
                <Search
                    handleSearch={this.handleSearch}
                />
                <AddTransactionForm
                    rerenderTransactions={this.fetchData}
                />
                <TransactionsList
                    transactions={filteredTransactions}
                    handleDelete={this.handleDelete}

                />
            </div>
        );
    }
}

export default AccountContainer;
