import classes from "./MovieOverview.module.css";

const MovieOverview = ({ overview }) => (
  <div className={classes.overviewContainer}>
    <div className={classes.innerText}>
      <p>{overview}</p>
    </div>
  </div>
);

export default MovieOverview;
