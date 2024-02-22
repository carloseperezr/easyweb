import React from "react";
import classes from "./NavBar.module.css";
import { NavLinkContainer } from "./NavLinkContainer";

export const NavBar = () => {
  return (
    <div className={`${classes.NavContainer}`}>
      <div>Logo</div>
      <div>
        <NavLinkContainer />
      </div>
    </div>
  );
};
