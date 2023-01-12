import { Card, LoadingDots } from "components";

import classes from "./MoviesContainer.module.css";

const MoviesContainer = ({
  movies,
  onNavigate,
  setLastElement,
  loading,
  pageNum,
  totalPages,
}) => (
  <div className={classes.moviesContainer}>
    {!!movies.length &&
      movies?.map((movie, i) => (
        <div
          className={classes.cardContainer}
          key={`${movie["id"]}-${i}`}
          ref={
            i === movies.length - 1 && !loading && pageNum <= totalPages
              ? setLastElement
              : null
          }
        >
          <Card
            image={movie["poster_path"]}
            title={movie["title"]}
            score={movie["vote_average"]}
            onClick={() => onNavigate(movie)}
          />
        </div>
      ))}
    {loading && <LoadingDots />}
  </div>
);

export default MoviesContainer;
