import React from 'react'
import { Link } from "react-router-dom";

import Button from '../Button'
import EndResult from './EndResult'
import Header from '../Header'

import './End.css'


const End = () => {
  return (
    <div className='end-page'>
      <Header />
      <div className='end-container'>
        <EndResult />
        <Link to="/game">
        <Button titre='REJOUER' onClick={() => localStorage.clear()} white />
        </Link>
        
      </div>
    </div>
  )
}

export default End