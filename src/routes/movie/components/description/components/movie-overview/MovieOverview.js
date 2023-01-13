import classes from "./MovieOverview.module.css";

const MovieOverview = ({ overview }) => (
  <div className={classes.overviewContainer}>
    <div className={classes.innerText}>
      {overview && <p>{overview}</p>}
      {!overview && <p>No description available</p>}
    </div>
  </div>
);

export default MovieOverview;
