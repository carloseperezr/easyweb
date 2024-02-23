import classes from "./HIW.module.css";

export const Cards = ({ img, title, text }) => {
  return (
    <div className={`${classes.cards}`}>
      <img src={img} alt={title} />
      <div className={`${classes.cardText}`}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
