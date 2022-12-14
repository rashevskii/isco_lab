import { Carousel } from "react-responsive-carousel";
import { FooterCarouselItem } from "./FooterCarouselItem/FooterCarouselItem";
import pic from "../../assets/images/social.jpg";

export const FooterCarousel = () => {
  const renderThumbs = (items) => {
    return items.map((item) => {
      return (
        <div key={item.props.title}>{item.props.title}</div>
      );  
  });
};

  return (
    <div className="blockContainer footerCarouselContainer">
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        renderThumbs={(items) => renderThumbs(items)}
        showArrows={false}
        swipeable={false}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
      >
        <FooterCarouselItem
          content={
            "В рамках спецификации современных стандартов, реплицированные с зарубежных источников, современные исследования неоднозначны и будут объявлены нарушающими общечеловеческие нормы этики и морали. Следует отметить, что высокотехнологичная концепция общественного уклада не оставляет шанса для благоприятных перспектив."
          }
          img={pic}
          link={"/"}
          title={"ИССЛЕДОВАНИЕ"}
        />
        <FooterCarouselItem
          content={
            "В рамках спецификации современных стандартов, реплицированные с зарубежных источников, современные исследования неоднозначны и будут объявлены нарушающими общечеловеческие нормы этики и морали. Следует отметить, что высокотехнологичная концепция общественного уклада не оставляет шанса для благоприятных перспектив."
          }
          img={pic}
          link={"/"}
          title={"МОДЕЛИРОВАНИЕ"}
        />
        <FooterCarouselItem
          content={
            "В рамках спецификации современных стандартов, реплицированные с зарубежных источников, современные исследования неоднозначны и будут объявлены нарушающими общечеловеческие нормы этики и морали. Следует отметить, что высокотехнологичная концепция общественного уклада не оставляет шанса для благоприятных перспектив."
          }
          img={pic}
          link={"/"}
          title={"СОЦ - ПРОДУКТ"}
        />
        <FooterCarouselItem
          content={
            "В рамках спецификации современных стандартов, реплицированные с зарубежных источников, современные исследования неоднозначны и будут объявлены нарушающими общечеловеческие нормы этики и морали. Следует отметить, что высокотехнологичная концепция общественного уклада не оставляет шанса для благоприятных перспектив."
          }
          img={pic}
          link={"/"}
          title={"ВОЛОНТЁРСТВО"}
        />
        <FooterCarouselItem
          content={
            "В рамках спецификации современных стандартов, реплицированные с зарубежных источников, современные исследования неоднозначны и будут объявлены нарушающими общечеловеческие нормы этики и морали. Следует отметить, что высокотехнологичная концепция общественного уклада не оставляет шанса для благоприятных перспектив."
          }
          img={pic}
          link={"/"}
          title={"ШКОЛА/ТРЕНИНГ"}
        />
        <FooterCarouselItem
          content={
            "В рамках спецификации современных стандартов, реплицированные с зарубежных источников, современные исследования неоднозначны и будут объявлены нарушающими общечеловеческие нормы этики и морали. Следует отметить, что высокотехнологичная концепция общественного уклада не оставляет шанса для благоприятных перспектив."
          }
          img={pic}
          link={"/"}
          title={"ОФФЛАЙН"}
        />
      </Carousel>
    </div>
  );
};
