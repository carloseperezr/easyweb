import classes from "./HIW.module.css";

export const Cards = ({ img, title, text }) => {
  return (
    <div className={`${classes.cards}`}>
      <div className={`${classes.cardIMG}`}>
        <img src={img} alt={title} />
      </div>
      <div className={`${classes.cardText}`}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
