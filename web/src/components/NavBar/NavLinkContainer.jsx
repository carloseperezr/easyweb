// NavLinkContainer.js
import React, { useEffect } from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "./NavLink";

export const NavLinkContainer = ({
  scrollToHero,
  scrollToHowItWorks,
  scrollToBenefits,
  scrollToWorks,
}) => {
  return (
    <div className={`${classes.linkContainer}`}>
      <NavLink text={"Inicio"} handleClick={scrollToHero} />
      <NavLink text={"Servicios"} handleClick={scrollToHowItWorks} />
      <NavLink text={"Beneficios"} handleClick={scrollToBenefits} />
      <NavLink text={"Recientes"} handleClick={scrollToWorks} />
    </div>
  );
};
