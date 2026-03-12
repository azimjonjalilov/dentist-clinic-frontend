import BannerBg from "../../components/ui/bannerBg/BannerBg";
import "./Home.css";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className="container">
      <BannerBg>
        <div>
          <h1>Enhance Your Quality of Life Through a Healthy Smile With Us.</h1>
          <p>
            We are committed to providing the best dental care that prioritizes
            your oral health. With our experience and dedication, we are always
            ready to assist you in achieving a healthy smile and improving your
            quality of life.
          </p>
        </div>
      </BannerBg>
    </div>
  );
};

export default Home;
