import { FooterCarousel } from "../FooterCarousel/FooterCarousel";
import "./FooterMinor.scss";

export const FooterMinor = () => {
  return (
    <div className="footerMinorWrapper">
      <div className="squareWithEarth"></div>
      <div className="footerEllipse"></div>
      <FooterCarousel />
    </div>
  );
}