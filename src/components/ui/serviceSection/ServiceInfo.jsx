import { Link } from "react-router-dom";
import styles from "./ServiceSection.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import toothImg from "@/assets/images/tooth.png";

const infoData = [
  {
    id: 1,
    img: toothImg,
    title: "Prevention and Dental Maintenance",
    desc: "which includes regular teeth cleaning, routine check-ups, as well as risk assessment and preventive care planning such as dental sealants and fluoride application to maintain dental health.",
    link: "",
  },
  {
    id: 2,
    img: toothImg,
    title: "Restorative Care",
    desc: "which involves treating damaged teeth, such as filling cavities, root canal treatment, tooth extraction, and the placement of dental crowns or bridges to restore the function and aesthetics of damaged teeth.",
    link: "",
  },
  {
    id: 3,
    img: toothImg,
    title: "Cosmetic Dental Care",
    desc: "which includes procedures aimed at enhancing the appearance of teeth, such as teeth whitening, veneer placement, correction of dental imperfections, and orthodontic treatments such as braces or clear aligners to improve the alignment of teeth.",
    link: "",
  },
];

const ServiceInfo = () => {
  return (
    <div className={`container ${styles.container}`}>
      {infoData.map((info) => (
        <div className={styles.content} key={info.id}>
          <div className={styles.icon}>
            <img src={info.img} alt={info.title} />
          </div>
          <h3>{info.title}</h3>
          <p>{info.desc}</p>
          <Link to={info.link}>
            <span>Read more</span>
            <FaArrowRightLong />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServiceInfo;
