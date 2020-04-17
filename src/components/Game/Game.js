import React from "react";
import axios from "axios";

import Button from "../Button";
import DisplaySynopsis from "./DisplaySynopsis";
import Header from "../Header";
import InputAnswer from "./InputAnswer";
import Result from "./Result";

import "./Game.css";


const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const page = 1;
const genre = 12;
// https://api.themoviedb.org/3/discover/movie?api_key={apiKey}&language=fr&sort_by=revenue.desc&include_adult=false&page={page}&with_genres={genre}
const movies = [
  {
    title: "Avengers : Endgame",
    overview:
      "Après leur défaite face au Titan Thanos qui dans le film précédent s'est approprié toutes les pierres du Gant de l'infini , les Avengers et les Gardiens de la Galaxie ayant survécu à son claquement de doigts qui a pulvérisé « la moitié de toute forme de vie dans l'Univers », Captain America, Thor, Bruce Banner, Natasha Romanoff, War Machine, Tony Stark, Nébula et Rocket, vont essayer de trouver une solution pour ramener leurs coéquipiers disparus et vaincre Thanos en se faisant aider par Ronin alias Clint Barton, Captain Marvel et Ant-Man.",
  },
  {
    title: "Avatar",
    overview:
      "Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un combattant au plus profond de son être. Il est recruté pour se rendre à des années-lumière de la Terre, sur Pandora, où de puissants groupes industriels exploitent un minerai rarissime destiné à résoudre la crise énergétique sur Terre. Parce que l'atmosphère de Pandora est toxique pour les humains, ceux-ci ont créé le Programme Avatar, qui permet à des \"pilotes\" humains de lier leur esprit à un avatar, un corps biologique commandé à distance, capable de survivre dans cette atmosphère létale. Ces avatars sont des hybrides créés génétiquement en croisant l'ADN humain avec celui des Na'vi, les autochtones de Pandora.",
  },
  {
    title: "Star Wars : Le Réveil de la Force",
    overview:
      "Il y a bien longtemps, dans une galaxie lointaine… Luke Skywalker est porté disparu. Le pilote Poe est en mission secrète sur une planète pour le retrouver. Au moment où la diabolique armée \"Premier Ordre\" apparaît en détruisant tout sur son passage, il arrive à cacher la position géographique de l'ancien maître Jedi dans son droïde BB-8. Capturé par les larbins du machiavélique Kylo Ren, Poe est libéré par le soldat ennemi Finn qui est en pleine crise existentielle. Pendant ce temps, BB-8 est recueillie par Rey, une pilleuse d'épaves qui sera bientôt plongée dans une quête qui la dépasse.",
  },
];

class Game extends React.Component {
  inputAnswer = React.createRef()

  state = {
    movie: 0,
    answer: "",
    count: 0,
    result: false
  };

  testAnswer = () => {
    const count = this.state.count
    if (this.state.answer === movies[this.state.movie].title){
      this.setState({ count: count + 1 , result: true});
    } else {
      this.setState({result: false})
    }
  };

  handleChangeInput = (event) => {
    this.setState({ answer: event.target.value });
  };

  displayResult = () => {
    this.testAnswer()
    document.querySelector(".result-card").style.display = "block";
  };

  changeMovie = () => {
    const movie = this.state.movie
    this.setState({movie: movie + 1})
    this.inputAnswer.current.textInput.current.value = ""
  }

  render() {
    return (
      <div className="game-container">
        <div className="game-page">
          <Header />
          <DisplaySynopsis movie={movies[this.state.movie]} />
          <InputAnswer onChange={this.handleChangeInput} ref={this.inputAnswer}/>
          <Button titre="VALIDER" onClick={this.displayResult} />
        </div>
        <Result count={this.state.count} className="result-page" value={this.changeMovie} result={this.state.result}/>
      </div>
    );
  }
}

export default Game;
