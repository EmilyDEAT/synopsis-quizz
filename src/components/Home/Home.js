import React from 'react'
import Button from '../Button'

import logo from '../../Images/logo-synopsis-quizz.png'

import './Home.css'


const Home = () => {
  return(
    <div className='home-page'>
        <img className='home-logo' src={logo} alt='logo synopsis quizz'/>
        <Button />
    </div>
  )
}

export default Home