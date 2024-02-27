import React from "react";
import classes from "./Footer.module.css";

export const FooterLinks = ({ text, handleClick }) => {
  return (
    <div className={`${classes.link}`} onClick={handleClick}>
      {text}
    </div>
  );
};
