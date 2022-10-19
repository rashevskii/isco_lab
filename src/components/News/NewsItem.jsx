import { Link } from "react-router-dom";
import './News.scss';

export const NewsItem = ({ message, img }) => {
  return (
    <div className="newsItem">
      <Link className="newsItemLink" to={"/"}>
        <img className="NewsItemImg" src={img} alt="Новость" />
        <div className="textBlock">
          <p>{message}</p>
        </div>
      </Link>
    </div>
  );
};
