import classes from "./CardContent.module.css";

const CardContent = ({ title }) => (
  <div className={classes.container}>
    <p>{title}</p>
  </div>
);

export default CardContent;
