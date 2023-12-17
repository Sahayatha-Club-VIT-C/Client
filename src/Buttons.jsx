import React from 'react'
import Data from "./Data";
function Buttons({departments,filterItems,setItems}) {
  return (
    <div className='d-flex justify-content-center mb-2'>
      {
        departments.map(val=>(
            <button className='btn' onClick={()=>filterItems(val)}>
                {val}
            </button>
        ))
      }
        <button className='btn' onClick={()=>setItems(Data)}>
            All
        </button>
    </div>
  )
}

export default Buttons
