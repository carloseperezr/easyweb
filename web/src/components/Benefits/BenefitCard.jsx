import React from "react";
import classes from "./Benefits.module.css";

export const BenefitCard = ({ img, title, text }) => {
  return (
    <div className={`${classes.benefitCards}`}>
      <div className={`${classes.cardIMG}`}>
        <img src={img} alt={title} />
      </div>
      <div className={`${classes.cardText}`}>
        <h3 className={`${classes.cardTitle}`}>{title}</h3>
        <p className={`${classes.cardText}`}>{text}</p>
      </div>
    </div>
  );
};
