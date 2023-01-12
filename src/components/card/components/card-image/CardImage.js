import classes from "./CardImage.module.css";

const CardImage = ({ image }) => (
  <div
    className={classes.image}
    style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/w300${image})`,
    }}
  />
);

export default CardImage;
