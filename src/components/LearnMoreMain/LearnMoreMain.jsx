import { Link } from "react-router-dom";
import { ColorButton } from "../../ui/ColorButton/ColorButton";
import { HeaderSection } from "../../ui/HeaderSection/HeaderSection";
import './LearnMoreMain.scss';
import volunteer from '../../assets/icons/volunteer.svg';
import sponsor from '../../assets/icons/sponsor.svg';
import thumbup from '../../assets/images/thumbup.png'; 

export const LearnMoreMain = () => {
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
              <img className="youCanStayIcon" src={volunteer} alt="Волонтерство" />
              <p className="youCanStayTitle">Хочешь стать волонтёром?</p>
              <Link className="youCanStayLink" to={'/'}>подробнее</Link>
            </div>
            <div className="youCanStaySponsor youCanStayBlock">
              <img className="youCanStayIcon" src={sponsor} alt="Спонсорство" />
              <p className="youCanStayTitle">Ты можешь стать спонсором</p>
              <Link className="youCanStayLink" to={'/'}>подробнее</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="orangeLineWrapper"></div>
      <div className="blockContainer">
        <div className="targetTask">
          <div className="targetTaskText">
            <div className="targetBlock">
              <h3 className="targetTitle">ЦЕЛЬ</h3>
              <p className="targetDescr">Содействие как государственным органам, так и институтам гражданского общества Российской Федерации, с целью модернизирования (в том числе и путем цифровой трансформации) и усовершенствования стратегического развития социальной политики. Содействие формированию личности на основе присущей российскому обществу системы ценностей.</p>
            </div>
            <div className="taskBlock">
              <div className="taskTitle">ЗАДАЧА</div>
              <div className="taskDescr">Содействие как государственным органам, так и институтам гражданского общества Российской Федерации, с целью модернизирования (в том числе и путем цифровой трансформации) и усовершенствования стратегического развития социальной политики. Содействие формированию личности на основе присущей российскому обществу системы ценностей.</div>
            </div>
          </div>
          <div className="targetTaskImage">
            <img src={thumbup} alt="Thumb up!" />
          </div>
        </div>
      </div>
    </div>
  );
};