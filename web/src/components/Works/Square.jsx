import React from "react";
import classes from "./Works.module.css";

export const Square = ({ title, text, img }) => {
  return (
    <div className={`${classes.squareCard}`}>
      <div className={`${classes.squareCardIMG}`}>
        <img src={img} alt={title} />
      </div>
      <div className={`${classes.cardText}`}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
