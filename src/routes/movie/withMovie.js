import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const withMovie = (Component) => (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    general: [],
    videos: [],
    reviews: [],
    similar: [],
    credits: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      ),
    ])
      .then((responses) => {
        return Promise.all(responses.map((response) => response.json()));
      })
      .then((data) => {
        setMovie({
          general: data[0],
          videos: data[1].results,
          reviews: data[2].results,
          similar: data[3].results,
          credits: data[4].cast,
        });
        setLoading(false);
      });
  }, [id]);

  const newProps = {
    ...props,
    movie,
    loading,
  };

  return <Component {...newProps} />;
};

export default withMovie;
