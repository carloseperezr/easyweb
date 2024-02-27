import React, { useState } from "react";
import classes from "./NavBar.module.css";
import { NavLinkContainer } from "./NavLinkContainer";

export const NavBar = ({
  scrollToHero,
  scrollToHowItWorks,
  scrollToBenefits,
  scrollToWorks,
  scrollToFAQ,
}) => {
  return (
    <div className={`${classes.NavContainer}`}>
      <div className={`${classes.NavLogo}`}>
        <img
          onClick={scrollToHero}
          src="https://i.postimg.cc/4ymdG1h3/memphis-emoji-smiled-face-1.png"
          alt="EasyWeb Logo"
        />
      </div>
      <div>
        <NavLinkContainer
          scrollToHero={scrollToHero}
          scrollToHowItWorks={scrollToHowItWorks}
          scrollToBenefits={scrollToBenefits}
          scrollToWorks={scrollToWorks}
          scrollToFAQ={scrollToFAQ}
        />
      </div>
    </div>
  );
};
