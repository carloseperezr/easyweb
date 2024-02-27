import React, { useEffect, useState } from "react";
import classes from "./Hero.module.css";
import { HeroIMG } from "./HeroIMG";

export const Hero = ({ heroRef, benefitsRef }) => {
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

  const handleButtonClick = () => {
    if (benefitsRef.current) {
      benefitsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`${classes.container}`} ref={heroRef}>
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
            <h2>Te ayudamos a construir tu Página Web</h2>
            <p>creando tu presencia en línea.</p>
          </div>
          <button onClick={handleButtonClick}>Ver detalles</button>
        </div>
        <div className={`${classes.heroImgWrapper}`}>
          <HeroIMG img={"https://i.postimg.cc/tgt8GYV2/easy-web.png"} />
        </div>
      </div>
    </div>
  );
};
