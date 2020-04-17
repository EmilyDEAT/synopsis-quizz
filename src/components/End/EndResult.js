import React from "react";

import "./EndResult.css";

const endResultText = [
  "Sublime !!!! Tu connais tout je suis sans mot !",
  "Bravo! les films n'ont aucun secret pour toi!",
  "Pas mal tout ça ! Encore un peu d'entraînement et tu seras au top !",
  "Bon, ce n'est pas encore ça, mais on est sur la bonne voie...",
  "Aïe aïe aïe... on est mal barré ! Va falloir regarder des film, et vite !",
];
const totalScore = localStorage.getItem("totalScore");

class EndResult extends React.Component {
  displayResultText = () => {
    if (totalScore < 5) {
      return endResultText[4]
    } else if (totalScore <= 5 && totalScore < 10){
      return endResultText[3]
    } else if (totalScore <= 10 && totalScore < 15){
      return endResultText[2]
    }else if (totalScore <= 15 && totalScore < 20) {
      return endResultText[1]
    } else if (totalScore === 20) {
      return endResultText[0]
    }
  }

  render() {
    return (
      <div className="endResult-container">
        <h2 className='endResult-text'>{this.displayResultText()}</h2>
        <p className='endResult-total'>Films trouvés: {totalScore}/20</p>
      </div>
    );
  }
}

export default EndResult;
