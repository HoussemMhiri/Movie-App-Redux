import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const HomePage = ({ show }) => {
  return (
    <section className="home">
      <h1>Home Of Movies</h1>
      <Link to="/cards">
        <button onClick={show} className="btns">
          Enter
        </button>
      </Link>
    </section>
  );
};

export default HomePage;
