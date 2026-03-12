import styles from "./BannerBg.module.css";
import bgImage from "@/assets/images/bgImage.png";

const BannerBg = ({ children }) => {
  return (
    <section
      className={styles.container}
      style={{
        backgroundImage: `url(${bgImage}), linear-gradient(#001a78, #001359)`,
      }}
    >
      {children}
    </section>
  );
};

export default BannerBg;
