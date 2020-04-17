import React from 'react'

import Score from './Score'

import './Result.css'


const Result = ({...props}) => {
  return (
    <div className='result-card'>
      <Score {...props}/>
    </div>
  )
}

export default Result