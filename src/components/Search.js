import React from "react";

const Search = (props) => {
  return (
    <div className="ui ß fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={props.handleSearchChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
