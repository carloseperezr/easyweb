import styles from "./FAQ.module.css";
import Collapsible from "react-collapsible";
import { FAQinfo } from "./FAQ";

export const FAQcontainer = () => {
  const renderFaq = () => {
    return FAQinfo.map((faq) => {
      return (
        <div key={faq.id}>
          <Collapsible
            className={styles.collapsible}
            trigger={
              <span className={styles.arrow}>
                {" "}
                <span className={styles.faqIcon}>+</span> {faq.pregunta}
              </span>
            }
            triggerWhenOpen={
              <span className={`${styles.arrow} ${styles.open}`}>
                <span className={styles.faqIcon}>-</span>
                {faq.pregunta}
              </span>
            }
            transitionTime={300}
            easing="ease"
          >
            <p className={styles.panel}>{faq.respuesta}</p>
          </Collapsible>
        </div>
      );
    });
  };

  return (
    <div className={styles.FAQContainer}>
      <svg id="wave" viewBox="0 0 1440 100">
        <path
          fill="#ffff"
          d="M0,60L24,56.7C48,53,96,47,144,41.7C192,37,240,33,288,30C336,27,384,23,432,28.3C480,33,528,47,576,43.3C624,40,672,20,720,16.7C768,13,816,27,864,38.3C912,50,960,60,1008,66.7C1056,73,1104,77,1152,71.7C1200,67,1248,53,1296,46.7C1344,40,1392,40,1440,33.3C1488,27,1536,13,1584,16.7C1632,20,1680,40,1728,50C1776,60,1824,60,1872,55C1920,50,1968,40,2016,30C2064,20,2112,10,2160,16.7C2208,23,2256,47,2304,50C2352,53,2400,37,2448,38.3C2496,40,2544,60,2592,60C2640,60,2688,40,2736,33.3C2784,27,2832,33,2880,45C2928,57,2976,73,3024,68.3C3072,63,3120,37,3168,23.3C3216,10,3264,10,3312,23.3C3360,37,3408,63,3432,76.7L3456,90L3456,100L3432,100C3408,100,3360,100,3312,100C3264,100,3216,100,3168,100C3120,100,3072,100,3024,100C2976,100,2928,100,2880,100C2832,100,2784,100,2736,100C2688,100,2640,100,2592,100C2544,100,2496,100,2448,100C2400,100,2352,100,2304,100C2256,100,2208,100,2160,100C2112,100,2064,100,2016,100C1968,100,1920,100,1872,100C1824,100,1776,100,1728,100C1680,100,1632,100,1584,100C1536,100,1488,100,1440,100C1392,100,1344,100,1296,100C1248,100,1200,100,1152,100C1104,100,1056,100,1008,100C960,100,912,100,864,100C816,100,768,100,720,100C672,100,624,100,576,100C528,100,480,100,432,100C384,100,336,100,288,100C240,100,192,100,144,100C96,100,48,100,24,100L0,100Z"
        ></path>
      </svg>
      <h3>FAQs</h3>
      <div className={styles.accordionWrapper}> {renderFaq()}</div>
    </div>
  );
};
