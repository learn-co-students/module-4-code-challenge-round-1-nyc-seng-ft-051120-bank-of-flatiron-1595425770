import React from "react";

const Transaction = (props) => {
  const {date, id, description, category, amount, deleteTransaction} = props
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={() => deleteTransaction(id)}>Delete</button></td>
    </tr>
  );
};

export default Transaction;
