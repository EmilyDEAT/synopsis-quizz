import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button";

import logo from "../../Images/logo-synopsis-quizz.png";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <img className="home-logo" src={logo} alt="logo synopsis quizz" />
      <Link to="/game">
        <Button titre="JOUER" />
      </Link>
    </div>
  );
};

export default Home;
