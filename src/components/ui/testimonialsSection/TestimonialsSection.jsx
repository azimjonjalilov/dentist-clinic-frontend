import styles from "./TestimonialsSection.module.css";
import "./TestimonialsSection.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const TestimonialsSection = () => {
  return (
    <section className={`container ${styles.section}`}>
      {/* header */}
      <div className={styles.header}>
        <h4 className="section-subtitle">TESTIMONIALS</h4>
        <h1 className="section-title">
          "Patient Satisfaction: Their Smiles are the Proof of Our Success."
        </h1>
        <p className="section-desc">
          "We are committed to providing satisfactory dental services and
          prioritizing patient satisfaction. With the support of an experienced
          team and genuine care, we aim to create happy and healthy smiles for
          each of our patients."
        </p>
      </div>

      {/* blogs container */}
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={2}
            spaceBetween={16}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={styles.slide}>
                <div className={styles.img}>
                  <img src="./assets/images/testi-1.png" alt="" />
                </div>
                <div className={styles.info}>
                  <p>
                    "This dental clinic is truly amazing! I came here with a bit
                    of apprehension, but the friendly staff and highly
                    experienced dentist patiently explained every step of the
                    treatment to me. They pay attention to details and create a
                    comfortable environment. As a result, my smile is now
                    healthier and more confident. Thank you, this clinic, for
                    making a visit to the dentist such a pleasant experience."
                  </p>

                  <div>
                    <p>Siti Aisyah</p>
                    <p>Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.slide}>
                <div className={styles.img}>
                  <img src="./assets/images/testi-2.png" alt="" />
                </div>
                <div className={styles.info}>
                  <p>
                    "This dental clinic is truly amazing! I came here with a bit
                    of apprehension, but the friendly staff and highly
                    experienced dentist patiently explained every step of the
                    treatment to me. They pay attention to details and create a
                    comfortable environment. As a result, my smile is now
                    healthier and more confident. Thank you, this clinic, for
                    making a visit to the dentist such a pleasant experience."
                  </p>

                  <div>
                    <p>Siti Aisyah</p>
                    <p>Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.slide}>
                <div className={styles.img}>
                  <img src="./assets/images/testi-1.png" alt="" />
                </div>
                <div className={styles.info}>
                  <p>
                    "This dental clinic is truly amazing! I came here with a bit
                    of apprehension, but the friendly staff and highly
                    experienced dentist patiently explained every step of the
                    treatment to me. They pay attention to details and create a
                    comfortable environment. As a result, my smile is now
                    healthier and more confident. Thank you, this clinic, for
                    making a visit to the dentist such a pleasant experience."
                  </p>

                  <div>
                    <p>Siti Aisyah</p>
                    <p>Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.slide}>
                <div className={styles.img}>
                  <img src="./assets/images/testi-2.png" alt="" />
                </div>
                <div className={styles.info}>
                  <p>
                    "This dental clinic is truly amazing! I came here with a bit
                    of apprehension, but the friendly staff and highly
                    experienced dentist patiently explained every step of the
                    treatment to me. They pay attention to details and create a
                    comfortable environment. As a result, my smile is now
                    healthier and more confident. Thank you, this clinic, for
                    making a visit to the dentist such a pleasant experience."
                  </p>

                  <div>
                    <p>Siti Aisyah</p>
                    <p>Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
