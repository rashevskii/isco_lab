import { Carousel } from "react-responsive-carousel";
import { PartnersItem } from "./PartnersItem";

export const PartnersCarousel = () => {
  return (
    <Carousel infiniteLoop={true} showStatus={false}>
      <PartnersItem />
      <PartnersItem />
      <PartnersItem />
    </Carousel>
  );
};