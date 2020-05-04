import React, {useState, useEffect} from "react";
import { Redirect } from "react-router-dom";

import "./Timer.css";

const Timer = ({time, result}) => {

  const [timer, setTimer] = useState(time)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer => timer -1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);



    const width = 150;
    const strokeWidth = 10;
    return timer === null ? null : timer === 0 ? <Redirect to="/end" /> : (
      <div className="timer-container">
        <p className="time">{timer}s</p>
        <svg viewBox='0 0 150 150' preserveAspectRatio="xMidYMid meet">
          <circle
            className="circle"
            cx={width / 2}
            cy={width / 2}
            r={width / 2 - strokeWidth / 2}
            stroke="#cf1717"
            strokeWidth={strokeWidth}
            fillOpacity="0"
            style={{ animation: `stroke ${time}s linear forwards` }}
          />
        </svg>
      </div>
    );
  }

export default Timer;
