import classes from "./PosterImage.module.css";

const PosterImage = ({ image }) => (
  <div
    className={classes.poster}
    style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/w300${image})`,
    }}
  />
);

export default PosterImage;
