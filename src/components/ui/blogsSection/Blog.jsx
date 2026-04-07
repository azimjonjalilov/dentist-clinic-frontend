import styles from "./BlogsSection.module.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = ({ blog }) => {
  const { img, title, date } = blog;
  return (
    <div className={styles.blog}>
      <div className={styles.img}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.info}>
        <span>{date}</span>
        <h3>{title}</h3>
        <Link to="">
          Read More <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
