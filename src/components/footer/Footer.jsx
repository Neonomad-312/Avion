import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-wrap'>
        <div className='top'>
          <div>
            <p>Menu</p>
            <a href="">New arrivals</a>
            <a href="">Best sellers</a>
            <a href="">Recently viewed</a>
            <a href="">Popular this week</a>
            <NavLink to={'/products'}><a href="">All products</a></NavLink>
          </div>
          <div>
            <p>Categories</p>
            <a href="">Crockery</a>
            <a href="">Furniture</a>
            <a href="">Homeware</a>
            <a href="">Plant pots</a>
            <a href="">Chairs</a>
          </div>
          <div>
            <p>Our company</p>
            <NavLink to={'/about'}>About us</NavLink>
            <a href="">Vacancies</a>
            <a href="">Contact us</a>
            <a href="">Privacy</a>
            <a href="">Returns policy</a>
          </div>
          <div>
            <p>Join our mailing list</p>
            <span>
              <input type="text" placeholder='your@email.com' />
              <button>Sign up</button>
            </span>
          </div>
        </div>
        <div className='bottom'>
          <p>Copyright 2022 Avion LTD</p>
          <div className='socials'>
            <img src="./src/assets/linkedin.svg" alt="" />
            <img src="./src/assets/facebook.svg" alt="" />
            <img src="./src/assets/instagram.svg" alt="" />
            <img src="./src/assets/skype.svg" alt="" />
            <img src="./src/assets/twitter.svg" alt="" />
            <img src="./src/assets/pinterest.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer