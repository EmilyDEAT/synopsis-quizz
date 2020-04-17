import React from 'react'
import { Link } from "react-router-dom";


import logo from '../Images/logo-synopsis-quizz.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <Link to='/'>
      <img className='header-img' src={logo} alt="text synopsis quizz" />
      </Link>
    </div>
  )
}

export default Header