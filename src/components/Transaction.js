import React from "react";

const Transaction = (props) => {
  const {date, description, category, amount, deleteTransaction, id} = props
  
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={()=>deleteTransaction(id)}>X</button></td>
    </tr>
  );
};

export default Transaction;
