import React, { useEffect, useState } from "react";
import classes from "./Hero.module.css";
import { HeroIMG } from "./HeroIMG";

export const Hero = () => {
  const [fontIndex, setFontIndex] = useState(0);
  const fonts = [
    "easyFont1",
    "easyFont2",
    "easyFont3",
    "easyFont4",
    "easyFont5",
    "easyFont6",
    "easyFont7",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 900);

    return () => clearInterval(interval);
  }, [fonts]);

  const currentFontClass = classes[fonts[fontIndex]];

  return (
    <div className={`${classes.container}`}>
      <div className={`${classes.wrapper}`}>
        <div className={`${classes.heroTextWrapper}`}>
          <div className={`${classes.heroTitle}`}>
            <h1>
              Living <br /> la vida <br />{" "}
              <span className={`${classes.easyFont} ${currentFontClass}`}>
                EASY
              </span>
            </h1>
          </div>
          <div className={`${classes.heroInfo}`}>
            <h2>Un tipo de agencia digital...algo asi</h2>
            <p>Revisiones ilimitadas y una tarifa mensual fija.</p>
          </div>
          <button>Ver detalles</button>
        </div>
        <div className={`${classes.heroImgWrapper}`}>
          <HeroIMG img={"https://i.postimg.cc/tRSsvPPq/1.png"} />
        </div>
      </div>
    </div>
  );
};
