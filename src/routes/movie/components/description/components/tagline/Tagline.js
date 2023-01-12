import classes from "./Tagline.module.css";

const Tagline = ({ tagline }) => (
  <p className={classes.tagline}>
    <i>{tagline}</i>
  </p>
);

export default Tagline;
