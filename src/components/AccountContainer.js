import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

    state = {
        transactionsArray: [],
    }

    fetchData = () => {
        fetch('http://localhost:6001/transactions')
            .then(r => r.jason())
            .then(transactions => {
                this.setState({ transactions })
            })
    }

    componentDidMount() {
        this.fetchData()
    }


    render() {
        return (
            <div>
                <Search />
                <AddTransactionForm />
                <TransactionsList />
            </div>
        );
    }
}

export default AccountContainer;
