import React from 'react'

import './Button.css'

const Button = ({titre, onClick}) => {
  return(
    <button className="button" onClick={onClick}>
      {titre}
    </button>
  )
}

export default Button