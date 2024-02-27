import React from "react";
import { Cards } from "./Cards";
import classes from "./HIW.module.css";

export const CardsContainer = () => {
  return (
    <div className={`${classes.cardsContainer}`}>
      <Cards
        img={"https://i.postimg.cc/QdhnzqdB/2.png"}
        title={"Suscribete"}
        text={
          "¡Comienza tu aventura en el mundo web uniéndote a nuestra suscripción mensual! Por solo $150 tendrás acceso ilimitado a trabajos de diseño de primera calidad."
        }
      />
      <Cards
        img={"https://i.postimg.cc/6QQbW5Rt/1.png"}
        title={"Solicita"}
        text={
          "¡Perfecto, estás dentro! Ahora es el momento de enviarnos tus tareas de diseño. ¿Necesitas un concepto de marca? ¿Un diseño de página de inicio elegante? ¿O tal vez un folleto tríptico llamativo?."
        }
      />
      <Cards
        img={"https://i.postimg.cc/zG7PYRyx/3.png"}
        title={"Revisa"}
        text={
          "¡Espera un momento! En tan solo 48 horas, tendrás tu primera vista previa de tu diseño completado. Y si no es amor a primera vista, ¡no te preocupes! Podemos ajustarlo y afinarlo hasta que quede perfecto; esa es la belleza de las revisiones ilimitadas."
        }
      />
    </div>
  );
};
