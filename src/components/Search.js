import React from "react";

class Search extends React.Component {

  state = {
    filter: ""
  }

  handleChange = (event) => {
    this.setState({
      filter: event.target.value 
    })
    this.props.onChange(event.target.value)
  }

  render () {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value = {this.state.filter}
        onChange={this.handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );}
};

export default Search;
