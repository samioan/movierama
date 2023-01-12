import { useNavigate } from "react-router-dom";

import { Card } from "components";

import classes from "./SimilarMovies.module.css";

const SimilarMovies = ({ similar }) => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <p>You may also like...</p>
      <div className={classes.innerContainer}>
        {similar.map((item) => (
          <div className={classes.cardContainer}>
            <Card
              key={item["id"]}
              image={item["poster_path"]}
              title={item["title"]}
              score={Math.round(item["vote_average"] * 10) / 10}
              onClick={() => navigate(`/movie/${item["id"]}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
