import React from 'react'

import Score from './Score'

import './Result.css'


const Result = ({count, value}) => {
  return (
    <div className='result-card'>
      <Score count={count} value={value}/>
    </div>
  )
}

export default Result