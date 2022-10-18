import { Link } from "react-router-dom";
import { WhiteButton } from "../../ui/WhiteButton/WhiteButton";
import { HeaderSection } from "../HeaderSection/HeaderSection";
import { PresentationBlockWrapper } from "../PresentationBlockWrapper/PresentationBlockWrapper";
import './AboutUs.scss';

export const AboutUs = () => {
  return (
    <div className="aboutUsWrapper" id="aboutUs">
      <div className="aboutUsInner blockContainer">
        <HeaderSection title={'Чем мы занимаемся'} />
        <PresentationBlockWrapper />
      </div>
      <div className="aboutUsName">
        <div className="blockContainer aboutUsNameContainer">
          <div className="blockName">
            <p className="organisationType">Автономная Некомерческая Организация</p>
            <p className="organisationName">“ЛАБОРАТОРИЯ РАЗВИТИЯ ИННОВАЦИОННОЙ СОЦИАЛЬНОЙ КОРПОРАЦИИ - ИСКО”</p>
            <WhiteButton location={'/'} title={'О нас'} anotherStyles={{ "font-size": 20, "padding": "15px 30px 15px 25px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};