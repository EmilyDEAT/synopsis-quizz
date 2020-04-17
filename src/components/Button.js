import React from 'react'

import './Button.css'

const Button = ({titre, onClick,white}) => {
  return(
    <button className= {white ? "white" : "red"} onClick={onClick}>
      {titre}
    </button>
  )
}

export default Button