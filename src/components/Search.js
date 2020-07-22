import React from "react";

const Search = (props) => {
  console.log(props);
  return (
    <div className="ui large fluid icon input">
      <input
        value={props.filter}
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={props.filterHandler}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
