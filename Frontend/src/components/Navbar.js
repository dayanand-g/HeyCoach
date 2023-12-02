import React from 'react'
import './Navbar.css';
import Logo from '../Icons/heycoach.png'

function Navbar() {
  return (
    <div className='main-navbar'>
        <div className='navbar-inside'>
          <div>
            <h2>HeyCoach Resturants </h2>
            <img className='heycoach-icon' src={Logo} alt="" />
          </div>
          <div>
              <p>Home</p>
              <p>Carrers</p>
              <p>About US</p>
          </div>
        </div>
    </div>
  )
}

export default Navbar