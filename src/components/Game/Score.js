import React from "react";
import { Link } from "react-router-dom";

import next from "../../Images/next.png";
import "./Score.css";

class Score extends React.Component {
  hideResult = () => {
    document.querySelector(".result-card").style.display = "none";
    this.props.value();
  };

  render() {
    return (
      <div className="score-container">
        <div className="score">
          <h2 className="score-text">
            {this.props.result ? "BRAVO !" : "DOMMAGE !"}
          </h2>
          <p className="score-result">Films trouvés: {this.props.count}/20</p>
        </div>
        {!this.props.stop ? (
          <img
            className="arrow-next"
            src={next}
            alt="white arrow"
            onClick={this.hideResult}
          />
        ) : (
          <Link to="./end">
            <img
              className="arrow-next"
              src={next}
              alt="white arrow"
              onClick={() => {
                localStorage.setItem("totalScore", this.props.count);
              }}
            />
          </Link>
        )}
      </div>
    );
  }
}

export default Score;
