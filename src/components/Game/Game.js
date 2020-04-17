import React from "react";
import axios from "axios";

import Button from "../Button";
import DisplaySynopsis from "./DisplaySynopsis";
import Header from "../Header";
import InputAnswer from "./InputAnswer";
import Result from "./Result";

import "./Game.css";

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const genre = 12;

class Game extends React.Component {
  inputAnswer = React.createRef();

  state = {
    movies: null,
    movie: 0,
    answer: "",
    count: 0,
    result: false,
  };

  testAnswer = () => {
    const count = this.state.count;
    if (this.state.answer === this.state.movies[this.state.movie].title) {
      this.setState({ count: count + 1, result: true });
    } else {
      this.setState({ result: false });
    }
  };

  handleChangeInput = (event) => {
    this.setState({ answer: event.target.value });
  };

  displayResult = () => {
    this.testAnswer();
    document.querySelector(".result-card").style.display = "block";
  };

  changeMovie = () => {
    const movie = this.state.movie;
    this.setState({ movie: movie + 1 });
    this.inputAnswer.current.textInput.current.value = "";
  };

  componentDidMount() {
    axios
      .get(
        `http://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr&page=${Math.floor(Math.random() * 10)}&with_genres=${genre}`
      )
      .then((res) => this.setState({ movies: res.data.results }));
  }

  render() {
    return (
      <div className="game-container">
        {this.state.movies === null ? (
          "Loading..."
        ) : (
          <div>
            {" "}
            <div className="game-page">
              <Header />
              <DisplaySynopsis movie={this.state.movies[this.state.movie]} />
              <InputAnswer
                onChange={this.handleChangeInput}
                ref={this.inputAnswer}
              />
              <Button titre="VALIDER" onClick={this.displayResult} />
            </div>
            <Result
              count={this.state.count}
              className="result-page"
              value={this.changeMovie}
              result={this.state.result}
              stop={this.state.movie === this.state.movies.length - 1}
              movie={this.state.movie}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Game;
