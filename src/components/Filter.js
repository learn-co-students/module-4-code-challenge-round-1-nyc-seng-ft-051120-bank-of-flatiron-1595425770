import React, { Component } from "react";

class Filter extends Component{
  state = {
   selected: ""
  }

render(){
  let a = "alphabetically"
  let c = "category"
  let d = "description"
  return (
    <>
<h3>Sort by:</h3>
<select name="select" >
 <option value={a} selected={this.state.selected === a}>{a}</option>);
  <option value={c} selected={this.state.selected === c}>{c}</option>);
   <option value={d} selected={this.state.selected === d}>{d}</option>);
</select>
</>
 )
 }
}

export default Filter;
