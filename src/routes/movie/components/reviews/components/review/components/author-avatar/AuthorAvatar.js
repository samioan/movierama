import classes from "./AuthorAvatar.module.css";

const AuthorAvatar = ({ avatar }) => (
  <img
    className={classes.avatar}
    src={
      !avatar.includes("gravatar")
        ? `https://image.tmdb.org/t/p/w300${avatar}`
        : avatar.substring(1)
    }
    alt="Avatar"
  />
);

export default AuthorAvatar;
