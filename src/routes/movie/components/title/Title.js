import classes from "./Title.module.css";

const Title = ({ text }) => (
  <h1 className={classes.title}>
    <i>{text}</i>
  </h1>
);

export default Title;
