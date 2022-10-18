import { Link } from "react-router-dom";
import { ColorButton } from "../../ui/ColorButton/ColorButton";
import { HeaderSection } from "../HeaderSection/HeaderSection";
import './LearnMore.scss';

export const LearnMore = () => {
  return (
    <div className="LearMoreWrapper" id="learnMore">
      <div className="blockContainer">
        <HeaderSection title={'Узнай больше'} />
        <div className="youCanStay">
          <div className="youCanStayDesc">
            <div className="youCanStayTextBlock">
              <p className="youCanStayText">Мы самые крутые и самые классные. Мы - это то, что тебе нужно!</p>
              <Link className="firstStep" to={'/'}>Сделай первый шаг сегодня.</Link>
            </div>
            <ColorButton text={'Связаться'} location={'/'} />
          </div>
          <div className="youCanStayBlocks">
            <div className="youCanStayVolunteer youCanStayBlock">
              <svg className="youCanStayIcon"></svg>
              <p className="youCanStayTitle">Хочешь стать волонтёром?</p>
              <Link className="youCanStayLink" to={'/'}>подробнее</Link>
            </div>
            <div className="youCanStaySponsor youCanStayBlock">
              <svg className="youCanStayIcon"></svg>
              <p className="youCanStayTitle">Ты можешь стать спонсором</p>
              <Link className="youCanStayLink" to={'/'}>подробнее</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};