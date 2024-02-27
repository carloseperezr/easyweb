import React from "react";
import classes from "./Works.module.css";
import { Slide } from "react-awesome-reveal";
import { Square } from "./Square";

export const Works = ({ worksRef }) => {
  return (
    <div className={classes.container} ref={worksRef}>
      <svg id="wave" viewBox="0 0 1440 100">
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="0" y2="0">
            <stop stopColor="#FFFFFF" offset="50%"></stop>
            <stop stopColor="#F196E4" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="#F196E4"
          d="M0,10L10.9,15C21.8,20,44,30,65,36.7C87.3,43,109,47,131,45C152.7,43,175,37,196,28.3C218.2,20,240,10,262,5C283.6,0,305,0,327,6.7C349.1,13,371,27,393,31.7C414.5,37,436,33,458,30C480,27,502,23,524,28.3C545.5,33,567,47,589,46.7C610.9,47,633,33,655,30C676.4,27,698,33,720,43.3C741.8,53,764,67,785,68.3C807.3,70,829,60,851,46.7C872.7,33,895,17,916,13.3C938.2,10,960,20,982,31.7C1003.6,43,1025,57,1047,56.7C1069.1,57,1091,43,1113,40C1134.5,37,1156,43,1178,53.3C1200,63,1222,77,1244,78.3C1265.5,80,1287,70,1309,70C1330.9,70,1353,80,1375,80C1396.4,80,1418,70,1440,63.3C1461.8,57,1484,53,1505,58.3C1527.3,63,1549,77,1560,83.3L1570.9,90L1570.9,100L1560,100C1549.1,100,1527,100,1505,100C1483.6,100,1462,100,1440,100C1418.2,100,1396,100,1375,100C1352.7,100,1331,100,1309,100C1287.3,100,1265,100,1244,100C1221.8,100,1200,100,1178,100C1156.4,100,1135,100,1113,100C1090.9,100,1069,100,1047,100C1025.5,100,1004,100,982,100C960,100,938,100,916,100C894.5,100,873,100,851,100C829.1,100,807,100,785,100C763.6,100,742,100,720,100C698.2,100,676,100,655,100C632.7,100,611,100,589,100C567.3,100,545,100,524,100C501.8,100,480,100,458,100C436.4,100,415,100,393,100C370.9,100,349,100,327,100C305.5,100,284,100,262,100C240,100,218,100,196,100C174.5,100,153,100,131,100C109.1,100,87,100,65,100C43.6,100,22,100,11,100L0,100Z"
        ></path>
      </svg>

      <div>
        <h2>Ultimos Trabajos</h2>
      </div>
      <Slide direction="up" triggerOnce={true}>
        <div className={`${classes.worksSection}`}>
          <div className={`${classes.rowOne}`}>
            <Square
              title={"UX/UI"}
              text={
                "Creación de wireframes y prototipos para validar conceptos de diseño."
              }
              img={
                "https://i.postimg.cc/kXFP8Bzf/memphis-mobile-app-development-and-application-programming.png"
              }
            />
            <Square
              title={"PsicoEze"}
              text={
                "Desarrollamos una identidad visual y una presentación convincente para captar la atención de nuevos pacientes."
              }
              img={"https://i.postimg.cc/C1k4prTg/psicoeze.png"}
            />
            <Square
              img={"https://i.postimg.cc/ht4Ldkxz/CONO-RCAcc-1.jpg"}
              title={"RCAcc"}
              text={
                "Desarrollo de sitio web audaz y fresco, con una paleta de colores vibrantes que reflejan la identidad única de la marca"
              }
            />
            <Square
              title={"Equilibrium"}
              text={
                "Creación de identidad y página web basada en el minimalismo y elegancia que su marca refleja"
              }
              img={"https://i.postimg.cc/nLf1KKrg/Equilibrium-Banner.png"}
            />
          </div>
        </div>
      </Slide>
    </div>
  );
};
