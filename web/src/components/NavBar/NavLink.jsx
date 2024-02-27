import React from "react";
import classes from "./NavBar.module.css";

export const NavLink = ({ text, handleClick }) => {
  return (
    <div className={`${classes.link}`} onClick={handleClick}>
      {text}
    </div>
  );
};
