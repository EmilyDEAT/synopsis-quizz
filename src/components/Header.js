import React from 'react'

import logo from '../Images/logo-synopsis-quizz.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <img className='header-img' src={logo} alt="text synopsis quizz" />
    </div>
  )
}

export default Header