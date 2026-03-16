import MainSection from "../../components/ui/mainSection/MainSection";
import WhatWeDo from "../../components/ui/whatWeDo/WhatWeDo";
import WhyChooseUs from "../../components/ui/whyChooseUs/WhyChooseUs";
import "./Home.css";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <MainSection />
      <WhatWeDo />
      <WhyChooseUs />
    </>
  );
};

export default Home;
