import React, { Component } from 'react';

class AddTransactionForm extends Component {
	state = {
		date: '',
		description: '',
		category: '',
		amount: 0,
	};

	handleChange = e => {
		console.log(e.target.value);
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		let { date, description, category, amount } = this.state;
		e.preventDefault();
		fetch('http://localhost:3000/transactions', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				date,
				description,
				category,
				amount,
			}),
		})
			.then(res => res.json())
			.then(newData => {
				this.setState({
					date: '',
					description: '',
					category: '',
					amount: 0,
				});
				this.props.handleFrontEnd(newData);
			});
	};

	render() {
		return (
			<div className='ui segment'>
				<form onSubmit={this.handleSubmit} className='ui form'>
					<div className='inline fields'>
						<input
							onChange={this.handleChange}
							type='date'
							name='date'
							value={this.state.date}
						/>
						<input
							onChange={this.handleChange}
							type='text'
							name='description'
							placeholder='Description'
							value={this.state.description}
						/>
						<input
							onChange={this.handleChange}
							type='text'
							name='category'
							placeholder='Category'
							value={this.state.category}
						/>
						<input
							onChange={this.handleChange}
							type='number'
							name='amount'
							placeholder='Amount'
							step='0.01'
							value={this.state.amount}
						/>
					</div>
					<button className='ui button' type='submit'>
						Add Transaction
					</button>
				</form>
			</div>
		);
	}
}

export default AddTransactionForm;
