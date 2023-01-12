import { MoviesContainer } from "components";

import { Search } from "./components";
import withMovies from "./withMovies";
import classes from "./Movies.module.css";

const Movies = ({
  movies,
  query,
  onChange,
  onSubmit,
  onNavigate,
  setLastElement,
  loading,
  pageNum,
  totalPages,
  error,
}) => {
  return (
    <>
      <Search onChange={onChange} value={query} onSubmit={onSubmit} />

      <MoviesContainer
        movies={movies}
        onNavigate={onNavigate}
        setLastElement={setLastElement}
        loading={loading}
        pageNum={pageNum}
        totalPages={totalPages}
      />

      {error && <p className={classes.error}>No movies found!</p>}
    </>
  );
};

export default withMovies(Movies);
