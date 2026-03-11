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
    <footer className={`container ${styles.footer}`}>
      <div className={styles.container}>
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className={styles.logo}>
            <TeethIcon />
            <span>Dentish</span>
          </Link>
          <p>Enhance Your Quality of Life Through a Healthy Smile With Us.</p>

          <ul className="socials">
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
        <div className="footer-menu">
          <h3 className="title">Menus</h3>
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
        <div className="footer-hours">
          <h3 className="title">Working hours</h3>

          <div className="time">
            <span>Monday - Friday</span>
            <span>09:00 - 18:00</span>
          </div>

          <div className="time">
            <span>Saturday</span>
            <span>09:00 - 12:00</span>
          </div>

          <div className="time">
            <span>Sunday</span>
            <span>Close</span>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3 className="title">Contact</h3>

          <a href="/" className="phone">
            <FaPhoneAlt />
            +62 894 3292 9555
          </a>

          <button className="appointment">Book an appointment now</button>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>All Rights Reserved Dentish 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
