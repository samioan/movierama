import classes from "./AuthorRating.module.css";

const AuthorRating = ({ rating }) => (
  <div>
    <p className={classes.rating}>{rating}</p>
  </div>
);

export default AuthorRating;
