import React, { Component } from "react";

const AddTransactionForm = (props) => {

  
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => props.handleSubmit(e, props)}>
          <div className="inline fields">
            <input type="date" name="date" value={props.date} onChange={(e) => props.handleChange(e)}/>
            <input type="text" name="description" placeholder="Description" value={props.description} onChange={(e) => props.handleChange(e)}/>
            <input type="text" name="category" placeholder="Category" value={props.category} onChange={(e) => props.handleChange(e)}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={props.amount}
              onChange={(e) => props.handleChange(e)}
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
