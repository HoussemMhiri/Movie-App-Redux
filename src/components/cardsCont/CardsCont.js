import React from "react";

import CardItem from "../card/CardItem";
import "./CardCont.css";
import AddBtn from "../addBtn/AddBtn";

const CardsCont = ({ moviesList }) => {
  return (
    <main>
      <section className="cardsCont">
        {moviesList.map((el) => (
          <CardItem key={el.id} el={el} />
        ))}
      </section>
      <AddBtn />
    </main>
  );
};

export default CardsCont;
