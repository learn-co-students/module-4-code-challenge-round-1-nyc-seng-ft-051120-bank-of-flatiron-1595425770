import React from "react";

const Transaction = (props) => {
  const {id, date, description, category, amount}=props
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button className='negative ui button' onClick={()=>props.handleDelete(id)}> Delete</button>
      </td>
    </tr>
  );
};

export default Transaction;
