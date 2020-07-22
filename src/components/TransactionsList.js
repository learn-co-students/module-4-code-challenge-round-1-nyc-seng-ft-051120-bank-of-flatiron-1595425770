import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {
  constructor(props) {
    super();
  }

  state = {
    sortedBy: "date"
  }

  selectSortingMethod = (e) => {
    console.log(e.target);
  }

  render() {

    const { sortedBy } = this.state;
    const { searchText } = this.props;

    return (
      <React.Fragment>
        <table className="ui celled striped padded table">
          <tbody>
            <tr>
              <th dataset="date">
                <h3 className="ui center aligned header" onClick={this.selectSortingMethod} >Date</h3>
              </th>
              <th dataset="description"> 
                <h3 className="ui center aligned header">Description</h3>
              </th>
              <th dataset="category">
                <h3 className="ui center aligned header">Category</h3>
              </th>
              <th dataset="amount">
                <h3 className="ui center aligned header">Amount</h3>
              </th>
            </tr>
  
            {this.props.transactions
              .sort(((a, b) => (a[sortedBy] > b[sortedBy]) ? 1 : -1))
              .filter(x => (
                x.description.toLowerCase()
                             .includes(
                               searchText.toLowerCase()
                              )
              ))
              .map( x => <Transaction key={x.id} transaction={ x }/>)
            }
          </tbody>
        </table>
      </React.Fragment>
    );
  }
};

export default TransactionsList;
