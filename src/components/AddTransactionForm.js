import React, { Component } from "react";



class AddTransactionForm extends Component {
 
  render() {
    const {date,description,category,amount,formChangeHandler,formSubmitHandler} = this.props
    // console.log(this.props)
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={formSubmitHandler}>
          <div className="inline fields">
            <input 
              type="date" 
              name="date" 
              value={date}
              onChange={formChangeHandler}
            />
            <input 
              type="text" 
              name="description"
              value={description} 
              onChange={formChangeHandler}
              placeholder="Description" 
            />
            <input 
              type="text"
              name="category" 
              value={category} 
              onChange={formChangeHandler}
              placeholder="Category" 
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={amount}
              onChange={formChangeHandler}
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
