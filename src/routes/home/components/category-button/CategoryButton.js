import classes from "./CategoryButton.module.css";

const CategoryButton = ({ isSelected, onClick, label }) => {
  return (
    <button
      className={isSelected ? classes.activeMovieButton : classes.movieButton}
      onClick={onClick}
      disabled={isSelected}
    >
      {label}
    </button>
  );
};

export default CategoryButton;
