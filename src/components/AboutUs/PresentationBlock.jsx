import { Link } from "react-router-dom";
import './AboutUs.scss';

export const PresentationBlock = ({ title, text, target }) => {
  console.log("target", target);
  return (
    <div className="presentationBlock">
      <h3 className="presentationTitle">{title}</h3>
      <p className="presentationText">{text}</p>
      <Link className="moreBtn" to={target}>Подробнее</Link>
    </div>
  );
};