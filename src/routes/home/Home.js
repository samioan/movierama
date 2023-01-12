import { MoviesContainer } from "components";

import withHome from "./withHome";
import classes from "./Home.module.css";
import { CategoryButton } from "./components";

const Home = ({
  movies,
  onNavigate,
  setLastElement,
  loading,
  pageNum,
  categoryButtons,
  totalPages,
}) => {
  return (
    <>
      <div className={classes.buttonsContainer}>
        {categoryButtons?.map(({ isSelected, onClick, label }) => (
          <CategoryButton
            key={label}
            isSelected={isSelected}
            onClick={onClick}
            label={label}
          />
        ))}
      </div>

      <MoviesContainer
        movies={movies}
        onNavigate={onNavigate}
        setLastElement={setLastElement}
        loading={loading}
        pageNum={pageNum}
        totalPages={totalPages}
      />
    </>
  );
};

export default withHome(Home);
