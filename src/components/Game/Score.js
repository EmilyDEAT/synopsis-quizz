import React from 'react'

import "./Score.css"

class Score extends React.Component {
  state={
    score: 0
  }
  render(){
    return(
      <div className="score-container">
        <h2 className='score-text'>BRAVO !</h2>
        <p className="score-result">Films trouvés: {this.state.score}/10</p>
      </div>
    )
  }
}

export default Score