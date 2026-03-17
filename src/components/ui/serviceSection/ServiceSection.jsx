import styles from "./ServiceSection.module.css";

const ServiceSection = () => {
  return (
    <div className={styles.info}>
      <h4 className="section-subtitle">our services</h4>
      <h1 className="section-title">We provide high-quality dental services</h1>
      <p className="section-desc">
        We prioritize quality in every aspect of dental care and always strive
        to provide the best service to each patient. With an experienced team of
        dentists, advanced technology, and attention to detail, we ensure that
        every patient receives the high-quality care they deserve
      </p>
      <div className="img">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default ServiceSection;
