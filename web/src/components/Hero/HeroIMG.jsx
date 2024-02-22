import React from "react";
import classes from "./Hero.module.css";

export const HeroIMG = ({ img }) => {
  return <img className={`${classes.heroIMG}`} src={img} />;
};
