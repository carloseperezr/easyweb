import React from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "./NavLink";

export const NavLinkContainer = () => {
  return (
    <div className={`${classes.linkContainer}`}>
      <NavLink text={"Inicio"} />
      <NavLink text={"Beneficios"} />
      <NavLink text={"Recientes"} />
      <NavLink text={"Precios"} />
      <NavLink text={"FAQ"} />
      <NavLink text={"Contacto"} />
    </div>
  );
};
