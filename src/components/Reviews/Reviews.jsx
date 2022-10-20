import { ReviewsCarousel } from "./ReviewsCarousel";

export const Reviews = () => {
  return (
    <div className="reviewsWrapper" id="reviews">
      <div className="sliderWrapper">
        <ReviewsCarousel />
      </div>
      <div className="ellipseTop"></div>
    </div>
  );
};
