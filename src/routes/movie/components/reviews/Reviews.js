import classes from "./Reviews.module.css";
import { Review } from "./components";

const Reviews = ({ reviews }) => (
  <div className={classes.container}>
    <p>{!!reviews.length ? "Reviews" : "No Reviews Available"}</p>
    <div>
      {!!reviews.length &&
        reviews.map((item) => (
          <Review
            rating={item["author_details"].rating}
            content={item.content}
            createdAt={item["created_at"]}
            author={item.author}
            avatar={item["author_details"]["avatar_path"]}
          />
        ))}
    </div>
  </div>
);

export default Reviews;
