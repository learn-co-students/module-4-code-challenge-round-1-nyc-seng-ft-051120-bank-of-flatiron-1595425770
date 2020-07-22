import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {
  state = {
    sortedBy: "date"
  }
  
  constructor(props) {
    super();
  }

  selectSortingMethod = (e) => {
    const sortingCategory = e.target.closest("th").dataset.category;
    this.setState({sortedBy: sortingCategory});
  }

  render() {

    const { sortedBy } = this.state;
    const { searchText } = this.props;

    return (
      <React.Fragment>
        <table className="ui celled striped padded table">
          <tbody>
            <tr style={{ cursor: "pointer" }}>
              <th onClick={this.selectSortingMethod} data-category="date">
                <h3 className="ui center aligned header"  >Date</h3>
              </th>
              <th onClick={this.selectSortingMethod} data-category="description"> 
                <h3 className="ui center aligned header">Description</h3>
              </th>
              <th onClick={this.selectSortingMethod} data-category="category">
                <h3 className="ui center aligned header">Category</h3>
              </th>
              <th onClick={this.selectSortingMethod} data-category="amount">
                <h3 className="ui center aligned header">Amount</h3>
              </th>
            </tr>
  
            {this.props.transactions
              .filter(x => 
                x.description.toLowerCase().includes(searchText.toLowerCase())
              )
              .sort(((a, b) => (a[sortedBy] > b[sortedBy]) ? 1 : -1))

              .map( x => <Transaction key={x.id} transaction={ x }/>)
            }
          </tbody>
        </table>
      </React.Fragment>
    );
  }
};

export default TransactionsList;
