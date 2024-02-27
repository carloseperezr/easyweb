import React from "react";
import classes from "./Benefits.module.css";
import { BenefitsCardsContainer } from "./BenefitsCardsContainer";

export const Benefits = ({ benefitsRef }) => {
  return (
    <div className={classes.container} ref={benefitsRef}>
      <svg id="wave" viewBox="0 0 1440 100">
        <path
          fill="rgba(255, 255, 255, 1)"
          d="M0,10L13.3,15C26.7,20,53,30,80,36.7C106.7,43,133,47,160,45C186.7,43,213,37,240,28.3C266.7,20,293,10,320,5C346.7,0,373,0,400,6.7C426.7,13,453,27,480,31.7C506.7,37,533,33,560,30C586.7,27,613,23,640,28.3C666.7,33,693,47,720,46.7C746.7,47,773,33,800,30C826.7,27,853,33,880,43.3C906.7,53,933,67,960,68.3C986.7,70,1013,60,1040,46.7C1066.7,33,1093,17,1120,13.3C1146.7,10,1173,20,1200,31.7C1226.7,43,1253,57,1280,56.7C1306.7,57,1333,43,1360,40C1386.7,37,1413,43,1440,53.3C1466.7,63,1493,77,1520,78.3C1546.7,80,1573,70,1600,70C1626.7,70,1653,80,1680,80C1706.7,80,1733,70,1760,63.3C1786.7,57,1813,53,1840,58.3C1866.7,63,1893,77,1907,83.3L1920,90L1920,100L1906.7,100C1893.3,100,1867,100,1840,100C1813.3,100,1787,100,1760,100C1733.3,100,1707,100,1680,100C1653.3,100,1627,100,1600,100C1573.3,100,1547,100,1520,100C1493.3,100,1467,100,1440,100C1413.3,100,1387,100,1360,100C1333.3,100,1307,100,1280,100C1253.3,100,1227,100,1200,100C1173.3,100,1147,100,1120,100C1093.3,100,1067,100,1040,100C1013.3,100,987,100,960,100C933.3,100,907,100,880,100C853.3,100,827,100,800,100C773.3,100,747,100,720,100C693.3,100,667,100,640,100C613.3,100,587,100,560,100C533.3,100,507,100,480,100C453.3,100,427,100,400,100C373.3,100,347,100,320,100C293.3,100,267,100,240,100C213.3,100,187,100,160,100C133.3,100,107,100,80,100C53.3,100,27,100,13,100L0,100Z"
        ></path>
      </svg>
      <div>
        <h2>Nuestros Beneficios</h2>
      </div>
      <div className={"classes.benefitsCardsContainer"}>
        <BenefitsCardsContainer />
      </div>
    </div>
  );
};