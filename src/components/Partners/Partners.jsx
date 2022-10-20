import { HeaderSection } from "../../ui/HeaderSection/HeaderSection";
import { PartnersCarousel } from "./PartnersCarousel";
import './Partners.scss';

export const Partners = () => {
  return (
    <div className="partnersWrapper" id="partners">
      <div className="blockContainer partnersInner">
        <HeaderSection title={'Партнеры'} />
        <PartnersCarousel />
      </div>
      <div className="ellipse"></div>
    </div>
  );
};