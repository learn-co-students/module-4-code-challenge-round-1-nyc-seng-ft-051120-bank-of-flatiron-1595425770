import React from "react";

const Transaction = (props) => {
  // console.log(props)
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.desc}</td>
      <td>{props.cat}</td>
      <td>{props.amt}</td>
      <td onClick={() => {props.handleDelete(props.id)}}>X</td>
    </tr>
  );
};

export default Transaction;
