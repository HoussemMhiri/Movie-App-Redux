import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./Details.css";
import { Button } from "react-bootstrap";

const Detts = () => {
  const { moviesList } = useSelector((state) => state);
  const params = useParams();
  const mov = moviesList.find((el) => el.id === Number(params.id));
  return (
    <section className="details">
      <h1>{mov.about}</h1>
      <p>{mov.desc}</p>
      <iframe
        width="560"
        height="315"
        src={mov.trailer}
        frameborder="0"
      ></iframe>
      <p style={{ fontWeight: "bold", color: "brown" }}>
        Movie Genre: {mov.movieType}
      </p>
      <Link to="/cards">
        <Button variant="primary">Back Home</Button>
      </Link>
    </section>
  );
};

export default Detts;
