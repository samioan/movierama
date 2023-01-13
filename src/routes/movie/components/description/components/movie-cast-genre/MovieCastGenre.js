import classes from "./MovieCastGenre.module.css";

const MovieCastGenre = ({ cast, genre }) => (
  <div className={classes.textContainer}>
    <div>
      {!!cast.length && (
        <div>
          <span>Cast: </span>
          {cast?.map(({ name }) => (
            <span key={name} className={classes.cast}>{`${name}`}</span>
          ))}
        </div>
      )}
      {!!genre.length && (
        <div className={classes.genreContainer}>
          <span>Genre: </span>
          {genre?.map(({ name }) => (
            <span key={name} className={classes.cast}>{`${name}`}</span>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default MovieCastGenre;
