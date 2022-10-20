import { Link } from "react-router-dom";
import './PartnerBage.scss';

export const PartnerBage1 = ({ title, text, logo, links }) => {
  return (
    <div className="partnerBage bage1">
      <div className="partnerBageInner">
        <div className="partnerLogo">
          <img src={logo} alt="Логотип" />
        </div>
        <div className="partnerAbout">
          <h4 className="partnerAboutName">{title}</h4>
          <p className="partnerAboutDesc">{text}</p>
          <div className="partnerLinks">
            {links ? links.map(link => {
              return (
                <Link className="partnerLink" to={link.href}>
                  <img src={link.path} alt="Ссылка на соцсети" />
                </Link>
              )
            }) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
