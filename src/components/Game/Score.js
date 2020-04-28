import React from "react";
import { Link } from "react-router-dom";

import next from "../../Images/next.png";
import "./Score.css";

const Score = ({...props}) => {
  const hideResult = () => {
    document.querySelector(".result-card").style.display = "none";
    props.value();
  };

    return (
      <div className="score-container">
        <div className="score">
          <h2 className="score-text">
            {props.result ? "BRAVO !" : "DOMMAGE !"}
          </h2>
          <p className="score-result">Films trouvés: {props.count}/{props.movie + 1}</p>
        </div>
        {!props.stop ? (
          <img
            className="arrow-next"
            src={next}
            alt="white arrow"
            onClick={hideResult}
          />
        ) : (
          <Link to="./end">
            <img
              className="arrow-next"
              src={next}
              alt="white arrow"
              onClick={() => {
                localStorage.setItem("totalScore", props.count);
              }}
            />
          </Link>
        )}
      </div>
    );
  }

export default Score;
