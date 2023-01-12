import classes from "./Search.module.css";

const Search = ({ onChange, value, onSubmit }) => (
  <div className={classes.container}>
    <form onSubmit={onSubmit} className={classes.formContainer}>
      <input
        className={classes.input}
        type="text"
        id="movieName"
        name="movieName"
        onChange={onChange}
        value={value}
        required
      />
      <button type="submit" className={classes.button}>
        Search
      </button>
    </form>
  </div>
);

export default Search;
