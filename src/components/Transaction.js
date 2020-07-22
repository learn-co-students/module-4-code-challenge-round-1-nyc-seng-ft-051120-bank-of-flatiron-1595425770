import React from "react";

const Transaction = (props) => {
  
  let { id, date, description, category, amount } = props
  console.log(props)
  
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
    </tr>
  );
};

export default Transaction;
