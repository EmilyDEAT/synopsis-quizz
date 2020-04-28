import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "../Button";
import DisplaySynopsis from "./DisplaySynopsis";
import Header from "../Header";
import InputAnswer from "./InputAnswer";
import Result from "./Result";
import Timer from "./Timer";

import "./Game.css";


const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const genre = 12;

const Game = () => {

    const [movies, setMovies] = useState(null)
    const [movie, setMovie] =  useState(0)
    const [answer, setAnswer] = useState("")
    const [count, setCount] = useState(0)
    const [result, setResult] = useState(false)
    const [time, setTime] = useState(30)

  const testAnswer = () => {
    if (answer === movies[movie].title) {
      setCount(count + 1)
      setResult(true);
    } else {
      setResult(false);
    }
  };

  const handleChangeInput = (event) => {
    setAnswer(event.target.value);
  };

  const displayResult = () => {
    testAnswer();
    document.querySelector(".result-card").style.display = "block";
  };

  const changeMovie = (e) => {
    setMovie(movie + 1);
    document.querySelector(".input-answer").value = ""
  };

  const getListMovies = () => {
    axios
      .get(
        `http://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr&page=${Math.floor(Math.random() * 10)}&with_genres=${genre}`
      )
      .then((res) => setMovies(res.data.results));
  }

  useEffect(() => getListMovies(),[])

    return (
      <div className="game-container">
        {movies === null ? (
          "Loading..."
        ) : (
          <div>
            {" "}
            <div className="game-page">
              <Header />
              <Timer time={time} movie={movie}/>
              <DisplaySynopsis movie={movies[movie]} />
              <InputAnswer
                onChange={handleChangeInput}
              />
              <Button titre="VALIDER" onClick={() => displayResult()} />
            </div>
            <Result
              count={count}
              className="result-page"
              value={() => changeMovie()}
              result={result}
              stop={movie === movies.length - 1}
              movie={movie}
            />
          </div>
        )}
      </div>
    );
  }

export default Game;
