import { NavLink } from "../NavBar/NavLink";
import classes from "./Footer.module.css";
import { FooterLinks } from "./FooterLinks";

export const Footer = ({
  scrollToHero,
  scrollToHowItWorks,
  scrollToBenefits,
  scrollToWorks,
}) => {
  return (
    <div className={`${classes.container}`}>
      <svg id="wave" viewBox="0 0 1440 100">
        <path
          fill="#000000"
          d="M0,10L24,15C48,20,96,30,144,36.7C192,43,240,47,288,45C336,43,384,37,432,28.3C480,20,528,10,576,5C624,0,672,0,720,6.7C768,13,816,27,864,31.7C912,37,960,33,1008,30C1056,27,1104,23,1152,28.3C1200,33,1248,47,1296,46.7C1344,47,1392,33,1440,30C1488,27,1536,33,1584,43.3C1632,53,1680,67,1728,68.3C1776,70,1824,60,1872,46.7C1920,33,1968,17,2016,13.3C2064,10,2112,20,2160,31.7C2208,43,2256,57,2304,56.7C2352,57,2400,43,2448,40C2496,37,2544,43,2592,53.3C2640,63,2688,77,2736,78.3C2784,80,2832,70,2880,70C2928,70,2976,80,3024,80C3072,80,3120,70,3168,63.3C3216,57,3264,53,3312,58.3C3360,63,3408,77,3432,83.3L3456,90L3456,100L3432,100C3408,100,3360,100,3312,100C3264,100,3216,100,3168,100C3120,100,3072,100,3024,100C2976,100,2928,100,2880,100C2832,100,2784,100,2736,100C2688,100,2640,100,2592,100C2544,100,2496,100,2448,100C2400,100,2352,100,2304,100C2256,100,2208,100,2160,100C2112,100,2064,100,2016,100C1968,100,1920,100,1872,100C1824,100,1776,100,1728,100C1680,100,1632,100,1584,100C1536,100,1488,100,1440,100C1392,100,1344,100,1296,100C1248,100,1200,100,1152,100C1104,100,1056,100,1008,100C960,100,912,100,864,100C816,100,768,100,720,100C672,100,624,100,576,100C528,100,480,100,432,100C384,100,336,100,288,100C240,100,192,100,144,100C96,100,48,100,24,100L0,100Z"
        ></path>
      </svg>
      <div className={`${classes.footerColumns}`}>
        <div className={`${classes.footerIMG}`}>
          <img
            src="https://i.postimg.cc/4ymdG1h3/memphis-emoji-smiled-face-1.png"
            alt="EasyWeb Logo"
            onClick={scrollToHero}
          />
        </div>
        <div className={`${classes.footerInfo}`}>
          <h4>We make the web a bit easier.</h4>
          <button className={`${classes.footerBtn}`}>
            <a href="mailto:easywebcontacto7@gmail.com">Contactanos</a>
          </button>
        </div>
        <div className={`${classes.footerLinks}`}>
          <FooterLinks text={"Inicio"} handleClick={scrollToHero} />
          <FooterLinks text={"Servicio"} handleClick={scrollToHowItWorks} />
          <FooterLinks text={"Beneficios"} handleClick={scrollToBenefits} />
          <FooterLinks text={"Recientes"} handleClick={scrollToWorks} />
        </div>
      </div>
    </div>
  );
};
