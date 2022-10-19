import { HeaderSection } from "../../ui/HeaderSection/HeaderSection";
import { NewsCarousel } from "./NewsCarousel";

export const News = () => {
  return (
    <div className="newsWrapper" id="news">
      <div className="blockContainer">
        <HeaderSection title={"Новости"} />
        <NewsCarousel />
      </div>
    </div>
  );
};
