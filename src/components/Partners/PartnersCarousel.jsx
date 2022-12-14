import { Carousel } from "react-responsive-carousel";
import { PartnersItem } from "./PartnersItem";

export const PartnersCarousel = () => {
  return (
    <Carousel
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      swipeable={false}
    >
      <PartnersItem />
      <PartnersItem />
      <PartnersItem />
    </Carousel>
  );
};
