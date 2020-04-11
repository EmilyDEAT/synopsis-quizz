import React from 'react'
import ButtonPlay from '../ButtonPlay'

import logo from '../../Images/logo-synopsis-quizz.png'

import './Home.css'


const Home = () => {
  return(
    <div className='home-page'>
        <img className='home-logo' src={logo} alt='logo synopsis quizz'/>
        <ButtonPlay />
    </div>
  )
}

export default Home