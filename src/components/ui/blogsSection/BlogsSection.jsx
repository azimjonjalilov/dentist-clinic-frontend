import styles from "./BlogsSection.module.css";
import Blog from "./Blog";
import { Link } from "react-router-dom";
import { blogsData } from "../../../data/data";

const BlogsSection = () => {
  return (
    <section className={`container ${styles.section}`}>
      {/* header */}
      <div className={styles.header}>
        <h4 className="section-subtitle">blogs</h4>
        <h1 className="section-title">
          Educate and Empower: Read Our Dental Health Insights and Tips
        </h1>
      </div>

      {/* blogs container */}
      <div className={styles.blogsContainer}>
        <div className={styles.container}>
          {blogsData.slice(0, 6).map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>

        <Link to="/blogs" className={`btn-primary ${styles.viewAll}`}>
          See More
        </Link>
      </div>
    </section>
  );
};

export default BlogsSection;
