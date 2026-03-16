import "./WhatWeDo.css";
import styles from "./WhatWeDo.module.css";
import imgSrc from "@/assets/images/img-1.png";

const WhatWeDo = () => {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.info}>
        <h4 className="section-subtitle">what we do</h4>
        <h1 className="section-title">
          Quality Dental Health and a Holistic Approach
        </h1>
        <p className="section-desc">
          At our dental clinic, we are committed to providing comprehensive and
          high-quality dental and oral healthcare to every patient. Our team
          consists of experienced and trained dentists who are ready to address
          various dental and oral issues.
        </p>
        <button className="btn-primary">Read More</button>
      </div>

      <div className={styles.img}>
        <img src={imgSrc} alt="image" />
      </div>
    </section>
  );
};

export default WhatWeDo;
