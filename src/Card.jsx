import React from 'react'
import './App.css';
function Card({item}) {
  return (
    <div className='container'>
      <div className='cardmain'>
        {item.map((val,index)=>(
            <div key={index} className='card'>
                <div>
                    <img  className='card_img' src={val.URL} alt="" />
                </div>
                <div className='card_body'>
                    <p>{val.Name}</p>
                    <p>{val.Reg_No}</p>
                    <p>{val.Role}</p>
                </div>

            </div>
        ))}
      </div>
    </div>
  )
}

export default Card

