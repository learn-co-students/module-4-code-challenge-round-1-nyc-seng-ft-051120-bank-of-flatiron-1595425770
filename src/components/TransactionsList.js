import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  // console.log(props)
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" onClick={props.handleSortDesc}>Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" onClick={props.handleSortCat}>Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Delete</h3>
          </th>
        </tr>
        {props.transactions.map(tran => 
              <Transaction
              key={tran.id}
              id={tran.id}
              date={tran.date}
              desc={tran.description}
              cat={tran.category}
              amt={tran.amount}
              handleDelete={props.handleDelete}
              />
        )}
      </tbody>
    </table>
  );
};

export default TransactionsList;
