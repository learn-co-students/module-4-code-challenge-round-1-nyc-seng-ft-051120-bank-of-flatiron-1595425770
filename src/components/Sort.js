import React from "react";

const Sort = (props) => {
  const { sortStatus, handleSort } = props
  return (
    <div className="ui large fluid icon input">
      <label> Sort Transactions Alphabetically By: 
        <select name='sortStatus' value={sortStatus} onChange={handleSort}>
            <option value="unsort">No Sort</option>
            <option value="category">Category</option>
            <option selected value="description">Description</option>
        </select>
      </label>
    </div>
  );
};

export default Sort;
