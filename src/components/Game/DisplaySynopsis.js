import React from 'react'

import './DisplaySynopsis.css'


const DisplaySynopsis = ({movie}) => {
  return (
    <div className='display-synopsis'>
      {movie.overview}
    </div>
  )
}

export default DisplaySynopsis