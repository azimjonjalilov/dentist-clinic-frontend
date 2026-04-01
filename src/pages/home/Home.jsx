import BlogsSection from "../../components/ui/blogsSection/BlogsSection";
import MainSection from "../../components/ui/mainSection/MainSection";
import RegisterSection from "../../components/ui/registerSection/RegisterSection";
import ServiceInfo from "../../components/ui/serviceSection/ServiceInfo";
import ServiceSection from "../../components/ui/serviceSection/serviceSection";
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
      <section className="service-section">
        <ServiceSection />
        <ServiceInfo />
      </section>
      <RegisterSection />
      <BlogsSection />
    </>
  );
};

export default Home;
