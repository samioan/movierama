import classes from "./Trailer.module.css";

const Trailer = ({ video }) => (
  <div className={classes.container}>
    <iframe
      className={classes.video}
      title="media"
      width="100%"
      height="400px"
      frameBorder="0"
      allow="fullscreen"
      src={`https://www.youtube.com/embed/${video}`}
    ></iframe>
  </div>
);

export default Trailer;
