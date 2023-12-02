import React from 'react'
import './Footer.css'
import Logo from '../Icons/heycoach.png'
import IndiaIcon from '../Icons/Group 214.png'

function Footer() {
  return (
    <div className='footer'>
      <div className='px-20'>
        <div className='footer-main text-white'>
          <div>
            <p><img className='heycoach-icon' src={Logo} alt="" /></p>
          </div>
          <div>
            <p className='footer-text'>Contact</p>
            <p className='footer-text'>FAQ</p>
          </div>
          <div>
            <p className='footer-text'>Tutorial</p>
            <p className='footer-text'>Blog</p>
          </div>
          <div>
            <p className='footer-text'>Privacy</p>
            <p className='footer-text'>Banned items</p>
          </div>
          <div>
            <p className='footer-text'>About</p>
            <p className='footer-text'>Jobs <span>3</span></p>
          </div>
          <div>
            <p className='footer-text'>Facebook</p>
            <p className='footer-text'>Twitter</p>
            <p className='footer-text'>Linkedin</p>
          </div>
        </div>
      <hr />
      <div className='footer-last-icon'>
        <p>Heycoach 2021, All rights reserved.</p>
        <img src={IndiaIcon} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Footer