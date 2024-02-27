import React from "react";
import { Cards } from "./Cards";
import classes from "./HIW.module.css";

export const CardsContainer = () => {
  return (
    <div className={`${classes.cardsContainer}`}>
      <Cards
        img={"https://i.postimg.cc/QdhnzqdB/2.png"}
        title={"Elige tu plan"}
        text={
          "¡Comienza tu aventura en el mundo web, elige tu plan y conctactanos, alli te brindaremos toda la informacion del servicio y podras aclarar todas tus dudas!."
        }
      />
      <Cards
        img={"https://i.postimg.cc/6QQbW5Rt/1.png"}
        title={"Solicita"}
        text={
          "¡Perfecto, estás dentro! una vez hayamos discutido los beneficios de tu plan, podrás mostrarnos tu diseño, pero tranquilo, que si no tienes nosotros te ayudaremos."
        }
      />
      <Cards
        img={"https://i.postimg.cc/zG7PYRyx/3.png"}
        title={"Revisa"}
        text={
          "¡Espera un momento! En tan solo 72 horas, tendrás tu primera vista previa de tu diseño completado. Y si no es amor a primera vista, ¡no te preocupes! Podemos ajustarlo y afinarlo hasta que quede perfecto."
        }
      />
    </div>
  );
};
