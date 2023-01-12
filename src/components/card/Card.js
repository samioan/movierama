import { CardImage, Overlay, Score, CardContent } from "./components";

import classes from "./Card.module.css";

const Card = ({ image, title, score, onClick }) => (
  <div className={classes.card}>
    <div className={classes.imageContainer}>
      <CardImage image={image} />
      <Overlay onClick={onClick} />
      <Score score={score} />
    </div>
    <CardContent title={title} />
  </div>
);

export default Card;
