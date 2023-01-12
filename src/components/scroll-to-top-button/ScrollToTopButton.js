import classes from "./ScrollToTopButton.module.css";
import { arrow } from "./images";

const ScrollToTopButton = ({ onClick }) => (
  <button className={classes.button} onClick={onClick}>
    <img className={classes.image} src={arrow} alt="Scroll" />
  </button>
);

export default ScrollToTopButton;
