import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Recipes</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Navbar
