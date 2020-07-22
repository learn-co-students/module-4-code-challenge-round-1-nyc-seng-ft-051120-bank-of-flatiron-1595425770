import React from "react";

const Transaction = (props) => {

  return (
    <tr>
      <td>{props.trans.date}</td>
      <td>{props.trans.description}</td>
      <td>{props.trans.category}</td>
      <td>{props.trans.amount}</td>
      <button onClick={() => props.deleteTrans(props.trans.id)}>Delete Transaction</button>
    </tr>
  );
};

export default Transaction;
