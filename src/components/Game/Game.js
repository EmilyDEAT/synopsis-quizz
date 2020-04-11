import React from 'react'
import DisplaySynopsis from './DisplaySynopsis'

import './Game.css'

const apiKey = process.env.REACT_APP_TMDB_API_KEY

const Game = () => {
  return (
    <div className='game-page'>
      <DisplaySynopsis />
      
    </div>
  )
}

export default Game