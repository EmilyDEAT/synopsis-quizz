import React from 'react'

import Score from './Score'

import './Result.css'


const Result = ({count, value, result}) => {
  return (
    <div className='result-card'>
      <Score count={count} value={value} result={result}/>
    </div>
  )
}

export default Result