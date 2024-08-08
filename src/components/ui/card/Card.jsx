import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.image} alt="" />
        <div>
            <h3>{props.title}</h3>
            <p>£{props.price}</p>
        </div>
    </div>
  )
}

export default Card