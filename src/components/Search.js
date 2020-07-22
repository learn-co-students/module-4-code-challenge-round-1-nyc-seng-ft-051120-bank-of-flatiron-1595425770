import React from "react";

class Search extends React.Component {
  state= {
    value: ''
  }

  handleChange = e => {
    this.setState({value: e.target.value});
    console.log(e.target.value)
    this.props.searchValue(this.state.value)
  }


  render() {
    return (
      
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <i className="circular search link icon"></i>
      </div>
    );
  }
};

export default Search;
