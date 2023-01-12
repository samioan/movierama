import classes from "./Review.module.css";
import { AuthorRating, ReviewContent, AuthorAvatar } from "./components";

const Review = ({ rating, content, createdAt, author, avatar }) => (
  <div className={classes.reviewContainer}>
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        {avatar && <AuthorAvatar avatar={avatar} />}
        <div className={classes.contentContainer}>
          <ReviewContent
            content={content}
            createdAt={createdAt}
            author={author}
          />
          {rating && <AuthorRating rating={rating} />}
        </div>
      </div>
    </div>
  </div>
);

export default Review;
