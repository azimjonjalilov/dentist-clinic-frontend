import "./WhyChooseUs.css";
import styles from "./WhyChooseUs.module.css";
import imgSrc from "@/assets/images/img-2.png";

const WhyChooseUs = () => {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.img}>
        <img src={imgSrc} alt="image" />
      </div>

      <div className={styles.info}>
        <h4 className="section-subtitle">why choose us</h4>
        <h1 className="section-title">
          Choose us for expert, personalized dental care in a comfortable
          environment.
        </h1>
        <p className="section-desc">
          We are the perfect choice for your dental care because we combine
          extensive experience with a deep commitment to dental health and
          patient satisfaction. Our team of skilled and knowledgeable dentists
          is ready to provide high-quality care that you can trust.
        </p>
        <button className="btn-primary">Read More</button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
