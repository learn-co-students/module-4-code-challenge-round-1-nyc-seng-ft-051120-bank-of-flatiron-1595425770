import React from "react";

const Search = (props) => {
  return (
    <>
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          onChange={props.searchHandler}
          value={props.search}
        />
        <i className="circular search link icon"></i>
      </div>
      <h3>Sort Your Transactions</h3>
  
      <select onChange={props.sortHandler}name="sort" id="sort">
        <option value="none">None</option>
        <option value="alphabetically">Alphabetically By Description</option>
        <option value="category">Alphabetically By Category</option>
        <option value="amount">Amount Ascending</option>
      </select>
    </>
  );
};

export default Search;
