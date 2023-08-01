import React from "react";
import ReactStars from "react-stars";

const RateStars = ({ setRate }) => {
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        color2={"#ffd700"}
      />
    </div>
  );
};

export default RateStars;
