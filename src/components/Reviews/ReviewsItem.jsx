import instagram from "../../assets/icons/instagram.png";
import './Reviews.scss';

export const ReviewsItem = ({ name, content }) => {
  return (
    <div className="reviewsItem">
      <div className="reviewsNameWrapper">
        <img className="reviewsNameIcon" src={instagram} alt="" />
        <h4 className="reviewName">{name}</h4>
      </div>
      <p className="reviewContent">{content}</p>
    </div>
  );
};
