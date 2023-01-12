import classes from "./ReviewContent.module.css";

const ReviewContent = ({ content, createdAt, author }) => (
  <div>
    <p className={classes.content}>{content}</p>
    <div className={classes.authorContainer}>
      <p className={classes.createdAt}>{createdAt}</p>
      <p className={classes.author}> by {author}</p>
    </div>
  </div>
);

export default ReviewContent;
