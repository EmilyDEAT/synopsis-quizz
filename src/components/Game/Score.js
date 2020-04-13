import React from "react";

import next from "../../Images/next.png";
import "./Score.css";

class Score extends React.Component {
  state = {
    score: 0,
  };

  hideResult = () => {
    document.querySelector('.result-card').style.display = 'none';
};

  render() {
    return (
      <div className="score-container">
        <div className="score">
          <h2 className="score-text">BRAVO !</h2>
          <p className="score-result">Films trouvés: {this.state.score}/10</p>
        </div>
        <img className="arrow-next" src={next} alt="white arrow" onClick={this.hideResult}/>
      </div>
    );
  }
}

export default Score;
