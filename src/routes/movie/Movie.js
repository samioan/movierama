import { LoadingDots } from "components";
import {
  Title,
  Poster,
  Description,
  Trailer,
  Reviews,
  SimilarMovies,
} from "./components";
import withMovie from "./withMovie";
import classes from "./Movie.module.css";

const Movie = ({ movie, loading }) => (
  <div>
    {loading && (
      <div className={classes.loadingContainer}>
        <LoadingDots />
      </div>
    )}
    {!loading && (
      <>
        <div
          className={classes.outerContainer}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.general["backdrop_path"]})`,
          }}
        >
          <div
            className={classes.innerContainer}
            style={{ backgroundColor: "rgba(10, 10, 10, 0.7)" }}
          >
            <Title text={movie?.general["title"]} />
            <div className={classes.topContainer}>
              <Poster
                image={movie?.general["poster_path"]}
                video={movie?.videos[0]?.["key"]}
              />
              <Description
                rating={Math.round(movie?.general["vote_average"] * 10) / 10}
                runtime={movie?.general["runtime"]}
                releaseDate={movie?.general["release_date"]}
                cast={movie?.credits.slice(0, 4)}
                genre={movie?.general["genres"]}
                tagline={movie?.general["tagline"]}
                overview={movie?.general["overview"]}
              />
              {movie?.videos[0]?.["key"] && (
                <Trailer video={movie?.videos[0]?.["key"]} />
              )}
            </div>
          </div>
        </div>
        <div className={classes.bottomContainer}>
          <Reviews reviews={movie?.reviews} />
          {!!movie?.similar?.length && (
            <SimilarMovies similar={movie?.similar} />
          )}
        </div>
      </>
    )}
  </div>
);

export default withMovie(Movie);
