import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  console.log(props)



  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3  className="ui center aligned header">{props.sortBy === 'description' ? '⬇️️ Description' : 'Description'}</h3>
            <button onClick={event => props.handleSortChange(event)} name="description" value="description" className="ui center aligned header">Sort</button>
          </th>
          <th>
            <h3 className="ui center aligned header">{props.sortBy === 'category' ? '⬇️️ Category' : 'Category'}</h3>
            <button onClick={event => props.handleSortChange(event)} name="category" value="category" className="ui center aligned header">Sort</button>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Delete</h3>
          </th>
        </tr>
        {props.transactions.map(transaction => 
          <Transaction {...transaction} key={transaction.id} deleteTransaction={props.deleteTransaction}/>
          )}
      </tbody>
    </table>
  );
};

export default TransactionsList;
