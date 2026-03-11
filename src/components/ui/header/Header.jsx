import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import styles from "./Header.module.css";
import { TeethIcon } from "../icons/Icons";

const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
      <Link to="/" className={styles.logo}>
        <TeethIcon />
        <span>Dentish</span>
      </Link>

      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarLink}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Blogs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/price"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Price
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
