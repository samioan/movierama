import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const withHome = (Component) => (props) => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState("top_rated");
  const [totalPages, setTotalPages] = useState(1);
  const [lastElement, setLastElement] = useState(null);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNum((no) => no + 1);
      }
    })
  );

  const callMovies = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${mode}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNum}`
    );

    const data = await response.json();

    setMovies([...movies, ...data.results]);
    setTotalPages(data["total_pages"]);
    setLoading(false);
  };

  useEffect(() => {
    if (pageNum <= totalPages) {
      callMovies();
    }
    // eslint-disable-next-line
  }, [pageNum, mode]);

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

  const onNavigate = (clickedMovie) => navigate(`/movie/${clickedMovie["id"]}`);

  const isInMode = (selectedMode) => mode === selectedMode;

  const switchToMode = (mode) => {
    setMovies([]);
    setPageNum(1);
    setMode(mode);
  };

  const categoryButtons = [
    {
      isSelected: isInMode("top_rated"),
      onClick: () => switchToMode("top_rated"),
      label: "TOP RATED",
    },
    {
      isSelected: isInMode("upcoming"),
      onClick: () => switchToMode("upcoming"),
      label: "UPCOMING",
    },
    {
      isSelected: isInMode("now_playing"),
      onClick: () => switchToMode("now_playing"),
      label: "NOW PLAYING",
    },
  ];

  const newProps = {
    ...props,
    movies,
    onNavigate,
    setLastElement,
    loading,
    pageNum,
    mode,
    setMode,
    setMovies,
    setPageNum,
    categoryButtons,
    totalPages,
  };

  return <Component {...newProps} />;
};

export default withHome;
