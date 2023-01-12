import classes from "./TrailerButton.module.css";

const TrailerButton = ({ video }) => (
  <button
    className={classes.trailerButton}
    onClick={() =>
      window.open(`https://www.youtube.com/watch?v=${video}`, "_blank")
    }
  >
    Watch Trailer
  </button>
);

export default TrailerButton;
