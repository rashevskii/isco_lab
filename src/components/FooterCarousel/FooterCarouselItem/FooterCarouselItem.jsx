import { Link } from "react-router-dom";
import "./FooterCarouselItem.scss";

export const FooterCarouselItem = ({ img, title, content, link }) => {
  return (
    <div className="footerCarouselItem">
      <div className="footerCarouselImg">
        <img src={img} alt="" />
      </div>
      <div className="footerCarouselDesc">
        <h3 className="footerCarouselTitle">{title}</h3>
        <p className="footerCarouselText">{content}</p>
        <Link className="footerCarouselLink" to={link}>Узнать больше</Link>
      </div>
    </div>
  );
};
