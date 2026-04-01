import BannerBg from "../bannerBg/BannerBg";
import styles from "./RegisterSection.module.css";
import registerImg from "@/assets/images/registerImg.png";

const RegisterSection = () => {
  return (
    <section className={`container ${styles.section}`}>
      <BannerBg>
        <div className={styles.container}>
          <div className={styles.info}>
            <h4 className="section-subtitle">ONLINE REGISTER</h4>
            <h1 className="section-title">
              Effortless Online Booking: Your Smile, Your Schedule!
            </h1>

            <ul>
              <li>
                <span className={styles.disc}></span>
                <span className={styles.text}>
                  Send a WhatsApp message to the number +628239483903
                </span>
              </li>
              <li>
                <span className={styles.disc}></span>
                <span className={styles.text}>
                  Provide the requested information.
                </span>
              </li>
              <li>
                <span className={styles.disc}></span>
                <span className={styles.text}>
                  We will verify your data and confirm your appointment through
                  WhatsApp.
                </span>
              </li>
              <li>
                <span className={styles.disc}></span>
                <span className={styles.text}>
                  You will be given a ticket number or appointment ID as a
                  reference
                </span>
              </li>
              <li>
                <span className={styles.disc}></span>
                <span className={styles.text}>
                  Remind yourself to arrive on time at the clinic on the day of
                  your appointment.
                </span>
              </li>
            </ul>
            <button>Register</button>
          </div>

          <div className={styles.img}>
            <img src={registerImg} loading="lazy" alt="Register Image" />
          </div>
        </div>
      </BannerBg>
    </section>
  );
};

export default RegisterSection;
