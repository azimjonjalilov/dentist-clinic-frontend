import { Link } from "react-router-dom";
import "./Footer.css";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { TeethIcon } from "../icons/Icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <TeethIcon />
            <span>Dentish</span>
          </Link>
          <p>
            Enhance Your Quality of Life Through a <br />
            Healthy Smile With Us.
          </p>

          <ul className={styles.socials}>
            <li>
              <a href="/">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>

        {/* Menu */}
        <div className={styles.menu}>
          <h3 className={styles.title}>Menus</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/price">Price</Link>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className={styles.hours}>
          <h3 className={styles.title}>Working hours</h3>

          <div className={styles.content}>
            <span>Monday - Friday</span>
            <span>09:00 - 18:00</span>
            <span>Saturday</span>
            <span>09:00 - 12:00</span>
            <span>Sunday</span>
            <span>Close</span>
          </div>
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <h3 className={styles.title}>Contact</h3>

          <a href="/">
            <FaPhoneAlt />
            <span>+99 890 123 45 67</span>
          </a>

          <button>Book an appointment now</button>
        </div>
      </div>

      <hr className={styles.line} />

      <div className={`container ${styles.copyright}`}>
        <p>All Rights Reserved Dentish 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
