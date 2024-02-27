import React from "react";
import classes from "./Benefits.module.css";
import { BenefitCard } from "./BenefitCard";
import { Slide } from "react-awesome-reveal";

export const BenefitsCardsContainer = () => {
  return (
    <div className={`${classes.cardsContainer}`}>
      <Slide direction="up" triggerOnce={true}>
        <BenefitCard
          img={"https://i.postimg.cc/nrzdBPyG/7.png"}
          title={"Sin salirte de tu presupuesto"}
          text={
            "Sabemos lo importante que es manejar tus recursos de manera eficiente. Nos comprometemos a ofrecerte servicios de alta calidad a bajo consto en comparación con el mercado. Trabajamos contigo para encontrar soluciones rentables que se ajusten a tus necesidades y objetivos comerciales."
          }
        />
        <BenefitCard
          img={"https://i.postimg.cc/mkTSGMPP/9.png"}
          title={"Diseño unico a tu servicio"}
          text={
            "Nos dedicamos a ofrecerte un diseño único y personalizado que refleje la esencia de tu marca o negocio. Cada página que creamos es una obra de arte digital, cuidadosamente elaborada para destacarte en el mundo online."
          }
        />
      </Slide>

      <Slide direction="up" triggerOnce={true}>
        <BenefitCard
          img={"https://i.postimg.cc/zvpFDBh0/8.png"}
          title={"Reuniones puntuales"}
          text={
            "Para maximizar la eficiencia y respetar tu tiempo, solo organizamos reuniones si son realmente necesarias para tu proyecto. Queremos mantenerte en la onda y evitar interrupciones innecesarias. Estamos aquí para ti, disponibles para consultas y actualizaciones, pero preferimos mantenernos ágiles y evitar el exceso de reuniones. ¡Tu comodidad es nuestra prioridad!."
          }
        />
        <BenefitCard
          img={"https://i.postimg.cc/zBq2XBpM/5.png"}
          title={"Modificaciones"}
          text={
            "En nuestro compromiso por garantizar tu satisfacción continua, ofrecemos modificaciones adicionales en tu página web. Nos aseguramos de que tu sitio esté siempre actualizado y funcione de manera óptima, adaptándonos a tus necesidades en constante evolución."
          }
        />
      </Slide>
      <Slide direction="up" triggerOnce={true}>
        <BenefitCard
          img={"https://i.postimg.cc/tJMB5zyQ/6.png"}
          title={"Speedy Gonzáles"}
          text={
            "¡En nuestro equipo, la velocidad es nuestra prioridad!, garantizamos una entrega rápida y eficiente de tu página web. No tendrás que esperar semanas para ver tu proyecto en línea; nos aseguramos de que esté listo en tiempo récord sin comprometer la calidad."
          }
        />
        <BenefitCard
          img={"https://i.postimg.cc/mrf6JV9T/4.png"}
          title={"Acceso limitado"}
          text={
            "Nos enfocamos en ofrecerte una experiencia exclusiva, por eso solo trabajamos con un número limitado de clientes cada mes. Esto nos permite brindarte un servicio personalizado y de alta calidad. ¡Asegura tu lugar hoy mismo para recibir nuestra atención especializada! ¿Listo para llevar tu proyecto al siguiente nivel? ¡Contáctanos ya mismo y hagamos magia juntos!."
          }
        />
      </Slide>
    </div>
  );
};
