import styles from "./BlogsSection.module.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.img}>
        <img src="./assets/images/blog1.png" alt="Blog 1" />
      </div>
      <div className={styles.info}>
        <span>Sep 25, 2023</span>
        <h3>Blog Title</h3>
        <Link to="">
          Read More <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
