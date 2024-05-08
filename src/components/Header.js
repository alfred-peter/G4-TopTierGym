import React from 'react'
import './Header.css'
import Logo from '../assets/logo.jpeg' 
function Header() {
  return (
    <div className='header'>

        <img src={Logo} alt='' className='logo' />

        <ul className='navbar'>
            <li>Home</li>
            <li>Services</li>
            <li>Why us?</li>
            <li>Plans</li>
            <li>Testimonials</li>

        </ul>


    </div>
  )
}

export default Header;