import BannerBg from "../bannerBg/BannerBg";
import styles from "./MainSection.module.css";
import heroImg from "@/assets/images/mainSection-doctor.png";

const MainSection = () => {
  return (
    <section className={`container ${styles.section}`}>
      <BannerBg>
        <div className={styles.container}>
          <div className={styles.info}>
            <h1 className={`title ${styles.title}`}>
              Enhance Your Quality of Life Through a Healthy Smile With Us.
            </h1>
            <p className={`desc ${styles.desc}`}>
              We are committed to providing the best dental care that
              prioritizes your oral health. With our experience and dedication,
              we are always ready to assist you in achieving a healthy smile and
              improving your quality of life.
            </p>
            <div className={styles.btns}>
              <button>Book an appointment now</button>
              <span>or</span>
              <a href="/">
                Call <span>+62 894 3292 9555</span>
              </a>
            </div>
          </div>

          <div className={styles.img}>
            <img src={heroImg} loading="lazy" alt="Doctor Image" />
          </div>
        </div>
      </BannerBg>
    </section>
  );
};

export default MainSection;
