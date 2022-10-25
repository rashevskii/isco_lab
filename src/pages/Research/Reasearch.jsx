import { Header } from "../../components/Header/Header";
import pic from "../../assets/images/research.png";
import "./Research.scss";

export const Research = () => {
  return (
    <div className="container headerContainer researchContainer">
      <Header
        title={"ИССЛЕДОВАНИЕ"}
        text={"Ищем ключ к тому, что бы сделать мир лучше!"}
        img={pic}
      />
    </div>
  );
};
