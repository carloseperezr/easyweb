import { CardsContainer } from "./CardsContainer";
import classes from "./HIW.module.css";
export const HowItWorks = () => {
  return (
    <div className={`${classes.container}`}>
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
              Bienvenido a casa. Somos EasyWeb, tu socio en la creación digital
              por una tarifa fija mensual. Nuestro objetivo es hacerte la vida
              más fácil.
            </p>
          </div>
        </div>
        <div className={`${classes.sS}`}>
          <h2>¿Cómo funciona?</h2>
          <CardsContainer />
        </div>
      </div>
    </div>
  );
};
