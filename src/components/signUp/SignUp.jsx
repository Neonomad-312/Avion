import React from 'react'
import './SignUp.css'

const Signin = () => {
  return (
    <div className='sign-up'>
      <div className='sign-up-card'>
        <div>
          <h1>Join the club and get the benefits</h1>
          <p>Sign up for our newsletter and receive exclusive offers on new <br /> ranges, sales, pop up stores and more</p>
        </div>
        <div>
          <input type="text" placeholder='your@email.com' />
          <button>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Signin