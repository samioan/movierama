import { infoIcon } from "./images";

import classes from "./Overlay.module.css";

const Overlay = ({ onClick }) => (
  <div className={classes.overlay}>
    <button className={classes.overlayButton} onClick={onClick}>
      <img className={classes.buttonImage} src={infoIcon} alt="More Info" />
    </button>
  </div>
);

export default Overlay;
