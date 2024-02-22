import React from "react";
import classes from "./NavBar.module.css";
export const NavLink = ({ text }) => {
  return <p className={`${classes.link}`}>{text}</p>;
};
