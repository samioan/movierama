import classes from "./Description.module.css";
import {
  MovieRuntimeDate,
  MovieCastGenre,
  Tagline,
  MovieOverview,
} from "./components";

const Description = ({
  runtime,
  releaseDate,
  cast,
  genre,
  tagline,
  overview,
}) => (
  <div className={classes.container}>
    <MovieRuntimeDate runtime={runtime} releaseDate={releaseDate} />
    <MovieCastGenre cast={cast} genre={genre} />
    <Tagline tagline={tagline} />
    <MovieOverview overview={overview} />
  </div>
);

export default Description;
