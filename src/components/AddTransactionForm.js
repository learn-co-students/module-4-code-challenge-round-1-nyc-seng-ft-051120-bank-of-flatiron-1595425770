import React, { Component } from "react";

const AddTransactionForm = (props) => {

  const {date, description, category, amount, handleChange, handleSubmit} = props
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => handleSubmit(e, props)}>
          <div className="inline fields">
            <input type="date" name="date" value={date} onChange={(e) => handleChange(e)}/>
            <input type="text" name="description" placeholder="Description" value={description} onChange={(e) => handleChange(e)}/>
            <input type="text" name="category" placeholder="Category" value={category} onChange={(e) => handleChange(e)}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={amount}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );

}

export default AddTransactionForm;
