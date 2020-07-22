import React from "react";

const Transaction = ({ transaction, handleClick }) => {
  return (
    <tr onClick={(e) => handleClick(e, transaction.id)}>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  );
};

export default Transaction;
