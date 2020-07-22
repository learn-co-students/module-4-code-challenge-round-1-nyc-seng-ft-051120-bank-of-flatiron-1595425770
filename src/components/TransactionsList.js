import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  
  
  const renderTrans = () => {
    return props.transArray.map(trans => <Transaction 
      id={trans.id}
      trans={trans}
    />)
  }
  
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {renderTrans()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
