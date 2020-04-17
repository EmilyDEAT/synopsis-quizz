import React from 'react'

import EndResult from './EndResult'
import Header from '../Header'

import './End.css'


const End = () => {
  return (
    <div className='end-container'>
      <Header />
      <div className='end-result-container'>
        <EndResult />
      </div>
    </div>
  )
}

export default End