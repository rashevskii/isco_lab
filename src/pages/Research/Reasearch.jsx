import { Header } from "../../components/Header/Header";
import pic from "../../assets/images/research.png";
import "./Research.scss";
import { LearnMoreMinor } from "../../components/LearnMoreMinor/LearnMoreMinor";
import { Footer } from "../../components/Footer/Footer";
import { FooterMinor } from "../../components/FooterMinor/FooterMinor";

export const Research = () => {
  return (
    <div className="container headerContainer researchContainer">
      <Header
        title={"ИССЛЕДОВАНИЕ"}
        text={"Ищем ключ к тому, что бы сделать мир лучше!"}
        img={pic}
      />
      <LearnMoreMinor />
      <Footer />
      <FooterMinor />
    </div>
  );
};
