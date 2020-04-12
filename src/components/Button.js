import React from 'react'

import './Button.css'

const Button = ({titre}) => {
  return(
    <button className="button" onClick="">
      {titre}
    </button>
  )
}

export default Button