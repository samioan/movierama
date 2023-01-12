import classes from "./MovieRuntimeDate.module.css";

const MovieRuntimeDate = ({ runtime, releaseDate }) => (
  <div className={classes.textContainer}>
    <p className={classes.runtime}>{runtime} mins</p>
    <p className={classes.releaseDate}>
      <i>{releaseDate}</i>
    </p>
  </div>
);

export default MovieRuntimeDate;
