import React from "react";

const Search = props => {

    return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        name="search"
        placeholder={"Search your Recent Transactions"}
        value={props.search}
        onChange={(e) => props.handleSearch(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
    );
  };

export default Search;
