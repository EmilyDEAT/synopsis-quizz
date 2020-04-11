import React from 'react'

import './DisplaySynopsis.css'

const synopsis = 'When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!'

const DisplaySynopsis = () => {
  return (
    <div className='display-synopsis'>
      {synopsis}
    </div>
  )
}

export default DisplaySynopsis