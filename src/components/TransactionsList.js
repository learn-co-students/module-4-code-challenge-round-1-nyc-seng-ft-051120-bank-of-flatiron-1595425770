// 7/22 JP Notes: TransactionsList was originally a functional component, but I changed it: 

import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {
  
  render(){
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>

          <th>
            <h3 className="ui center aligned header">Date</h3>
            <td>{this.props.date}</td>
          </th>

          <th>
            <h3 className="ui center aligned header">Description</h3>
            <td>{this.props.description}</td>
          </th>
          
          <th>
            <h3 className="ui center aligned header">Category</h3>
            <td>{this.props.category}</td>
          </th>
          
          <th>
            <h3 className="ui center aligned header">Amount</h3>
            <td>{this.props.admount}</td>
          </th>
          
        </tr>
        {/* render Transactions here */}
      </tbody>
    </table>
  );
};
}

export default TransactionsList;

/////////////////////////////////////////////////

// import React from "react";
// import Transaction from "./Transaction";

// const TransactionsList = () => {
//   return (
//     <table className="ui celled striped padded table">
//       <tbody>
//         <tr>
//           <th>
//             <h3 className="ui center aligned header">Date</h3>
//             <td>{props.date}</td>
//           </th>
//           <th>
//             <h3 className="ui center aligned header">Description</h3>
//           </th>
//           <th>
//             <h3 className="ui center aligned header">Category</h3>
//           </th>
//           <th>
//             <h3 className="ui center aligned header">Amount
//             </h3>
//           </th>
//         </tr>
//         {/* render Transactions here */}
//       </tbody>
//     </table>
//   );
// };

// export default TransactionsList;


