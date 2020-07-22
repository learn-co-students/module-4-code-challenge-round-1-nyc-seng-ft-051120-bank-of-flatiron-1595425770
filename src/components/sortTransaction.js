import React from 'react'

const SortTransaction=(props)=>{

    return(
        <>
        <h3>Sort By:</h3>
        <select className="ui dropdown" onChange={props.handleSortChange}>
        
        <option value="" >Gender</option>
        <option value='description' >description</option>
        <option value='category' >category</option>
      </select>
      </>
    )
    
}

export default SortTransaction