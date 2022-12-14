import { Carousel } from "react-responsive-carousel";
import { NewsItem } from "./NewsItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import newsBg from "../../assets/images/news-bg.jpg";

export const NewsCarousel = () => {
  return (
    <Carousel
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      swipeable={false}
    >
      <div className="coupleItems">
        <NewsItem
          img={newsBg}
          message={
            "Ясность нашей позиции очевидна: базовый вектор развития позволяет выполнить важные задания по разработке системы массового участия. Но существующая теория является качественно новой ступенью новых предложений."
          }
        />
        <NewsItem
          img={newsBg}
          message={
            "Ясность нашей позиции очевидна: базовый вектор развития позволяет выполнить важные задания по разработке системы массового участия. Но существующая теория является качественно новой ступенью новых предложений."
          }
        />
      </div>
      <div className="coupleItems">
        <NewsItem
          img={newsBg}
          message={
            "Ясность нашей позиции очевидна: базовый вектор развития позволяет выполнить важные задания по разработке системы массового участия. Но существующая теория является качественно новой ступенью новых предложений."
          }
        />
        <NewsItem
          img={newsBg}
          message={
            "Ясность нашей позиции очевидна: базовый вектор развития позволяет выполнить важные задания по разработке системы массового участия. Но существующая теория является качественно новой ступенью новых предложений."
          }
        />
      </div>
      <div className="coupleItems">
        <NewsItem
          img={newsBg}
          message={
            "Ясность нашей позиции очевидна: базовый вектор развития позволяет выполнить важные задания по разработке системы массового участия. Но существующая теория является качественно новой ступенью новых предложений."
          }
        />
        <NewsItem
          img={newsBg}
          message={
            "Ясность нашей позиции очевидна: базовый вектор развития позволяет выполнить важные задания по разработке системы массового участия. Но существующая теория является качественно новой ступенью новых предложений."
          }
        />
      </div>
    </Carousel>
  );
};
