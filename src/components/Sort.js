import React from "react";

const Sort = (props) => {

  return (
    <form>
    <label>
      Sort By:
      <select onChange>
        <option value="category">Category</option>
        <option value="description">Description</option>
      </select>
    </label>
    <input type="submit" value="Submit" />
  </form>
  );
};

export default Sort;