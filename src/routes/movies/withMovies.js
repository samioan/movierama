import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const withMovies = (Component) => (props) => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [lastElement, setLastElement] = useState(null);
  const [isInSearchMode, setSearchMode] = useState(false);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNum((no) => no + 1);
      }
    })
  );

  const searchMovies = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}&page=${pageNum}`
    );

    const data = await response.json();

    setMovies([...movies, ...data.results]);
    setLoading(false);
  };

  useEffect(() => {
    if (pageNum <= totalPages) {
      isInSearchMode && searchMovies();
    }
    // eslint-disable-next-line
  }, [pageNum]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  const onChange = (event) => setQuery(event.target.value);
  const onSubmit = async (event) => {
    event.preventDefault();

    setError(false);
    setLoading(true);
    setMovies([]);

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}&page=1`
    );

    const data = await response.json();

    setMovies(data.results);
    setTotalPages(data["total_pages"]);
    setLoading(false);
    setSearchMode(true);
    setPageNum(1);
    if (!data.results.length) {
      setError(true);
    }
  };
  const onNavigate = (clickedMovie) => navigate(`/movie/${clickedMovie["id"]}`);

  const newProps = {
    ...props,
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
  };

  return <Component {...newProps} />;
};

export default withMovies;
