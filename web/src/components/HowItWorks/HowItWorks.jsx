import React from "react";
import classes from "./HIW.module.css";
import { Slide } from "react-awesome-reveal";
import { CardsContainer } from "./CardsContainer";

export const HowItWorks = ({ howItWorksRef }) => {
  return (
    <div className={classes.container} ref={howItWorksRef}>
      <svg id="wave" viewBox="0 0 1440 100">
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(249, 218, 74, 1)" offset="0%"></stop>
            <stop stopColor="rgba(249, 218, 74, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient-0)"
          d="M0,10L10,15C20,20,40,30,60,36.7C80,43,100,47,120,45C140,43,160,37,180,28.3C200,20,220,10,240,5C260,0,280,0,300,6.7C320,13,340,27,360,31.7C380,37,400,33,420,30C440,27,460,23,480,28.3C500,33,520,47,540,46.7C560,47,580,33,600,30C620,27,640,33,660,43.3C680,53,700,67,720,68.3C740,70,760,60,780,46.7C800,33,820,17,840,13.3C860,10,880,20,900,31.7C920,43,940,57,960,56.7C980,57,1000,43,1020,40C1040,37,1060,43,1080,53.3C1100,63,1120,77,1140,78.3C1160,80,1180,70,1200,70C1220,70,1240,80,1260,80C1280,80,1300,70,1320,63.3C1340,57,1360,53,1380,58.3C1400,63,1420,77,1430,83.3L1440,90L1440,100L1430,100C1420,100,1400,100,1380,100C1360,100,1340,100,1320,100C1300,100,1280,100,1260,100C1240,100,1220,100,1200,100C1180,100,1160,100,1140,100C1120,100,1100,100,1080,100C1060,100,1040,100,1020,100C1000,100,980,100,960,100C940,100,920,100,900,100C880,100,860,100,840,100C820,100,800,100,780,100C760,100,740,100,720,100C700,100,680,100,660,100C640,100,620,100,600,100C580,100,560,100,540,100C520,100,500,100,480,100C460,100,440,100,420,100C400,100,380,100,360,100C340,100,320,100,300,100C280,100,260,100,240,100C220,100,200,100,180,100C160,100,140,100,120,100C100,100,80,100,60,100C40,100,20,100,10,100L0,100Z"
        ></path>
      </svg>
      <div className={`${classes.containerIMG1}`}>
        <img src="https://i.postimg.cc/6pbd3j73/phone.png" alt="bannerIMG" />
      </div>
      <div className={`${classes.wrapper}`}>
        <div className={`${classes.fS}`}>
          <div className={`${classes.fsImg}`}>
            <img
              src="https://i.postimg.cc/VvSBKZMy/memphis-internet-of-things-network-of-connected-devices.pnghttps://i.postimg.cc/tgt8GYV2/easy-web."
              alt=""
            />
          </div>
          <div className={`${classes.fsText}`}>
            <h2>
              El futuro de los <br />
              servicios web
            </h2>
            <p>
              <strong>
                ¿Necesitas un sitio web llamativo, una buena UI/UX o simplemente
                renovar tu página actual?
              </strong>
              Bienvenido a casa, somos EasyWeb... tu socio en la creación
              digital. Nuestro objetivo es hacerte la vida más fácil.
            </p>
          </div>
        </div>
        <Slide direction={"up"} triggerOnce={true}>
          <div className={`${classes.sS}`}>
            <h2>¿Cómo funciona?</h2>
            <CardsContainer />
          </div>
        </Slide>
        <Slide direction={"up"} triggerOnce={true}>
          <div className={`${classes.tS}`}>
            <h2 className={`${classes.tSTitle}`}>Planes</h2>
            <div className={`${classes.tSServices}`}>
              <div className={`${classes.tSSection}`}>
                <div className={classes.plansTitle}>
                  <h3>Básico</h3>
                  <h4>$90</h4>
                </div>
                <ul>
                  <li>Creación de sitio web</li>
                  <li>Máximo 3 vistas</li>
                  <li>5 Correcciones</li>
                </ul>
              </div>
              <div className={`${classes.tSSection}`}>
                <div className={classes.plansTitle}>
                  <h3>Avanzado</h3>
                  <h4>$120</h4>
                </div>
                <ul>
                  <li>Creación de sitio web</li>
                  <li>Máximo 5 vistas</li>
                  <li>7 Correcciones</li>
                </ul>
              </div>
              <div className={`${classes.tSSection}`}>
                <div className={classes.plansTitle}>
                  <h3>Adicionales</h3>
                  <h4>$12</h4>
                  <small>c/u</small>
                </div>
                <ul>
                  <li>Modificaciones</li>
                  <li>Creación de plantilla de correo electrónico</li>
                  <li>Despliegue y Administración de página web</li>
                </ul>
              </div>
            </div>
          </div>
        </Slide>
      </div>
      <div className={`${classes.containerIMG2}`}>
        <img src="https://i.postimg.cc/GhrPSsw-c/block.png" alt="bannerIMG" />
      </div>
    </div>
  );
};
