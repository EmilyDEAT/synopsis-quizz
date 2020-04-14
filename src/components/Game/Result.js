import React from 'react'

import Score from './Score'

import './Result.css'


const Result = ({count}) => {
  return (
    <div className='result-card'>
      <Score count={count}/>
    </div>
  )
}

export default Result