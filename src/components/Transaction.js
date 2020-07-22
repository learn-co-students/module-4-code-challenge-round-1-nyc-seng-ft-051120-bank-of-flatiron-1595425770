import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transaction.date}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
      <td onClick={() => props.delete(props.transaction.id)}><button>Delete</button></td>
    </tr>
  );
};

export default Transaction;
