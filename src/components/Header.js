import React from 'react';
import './Header.css';
import Logo from '../assets/logo-fotor-bg-remover-202405091873.png';


function Header() {
  return (
    <div className='header'>
      <img src={Logo} alt='' className='logo' />
      <ul className='navbar'>
      <ul className='navbar'>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#whyus">Why US?</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#joinus">Join Us</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
      </ul>
    </div>
  );
}

export default Header;