import classes from "./Poster.module.css";
import { PosterImage, TrailerButton } from "./components";

const Poster = ({ image, video }) => (
  <div className={classes.container}>
    <PosterImage image={image} />
    <TrailerButton video={video} />
  </div>
);

export default Poster;
