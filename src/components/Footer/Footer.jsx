import { HeaderSection } from "../../ui/HeaderSection/HeaderSection";
import './Footer.scss';
import pointer from '../../assets/images/pointer.png';
import phone from '../../assets/images/phone.png';
import mail from '../../assets/images/mail.png';
import { FooterForm } from "./FooterForm";

export const Footer = () => {
  return (
    <div className="footerWrapper" id="feedback">
      <div className="footerInner blockContainer">
        <HeaderSection title={'Обратная связь'} />
        <div className="feedback">
          <div className="contacts">
            <div className="address contactBlock">
              <div className="contactIcon">
                <img src={pointer} alt="" />                
              </div>
              <div className="contactData">
                <p className="contactDataTitle">Наш адрес</p>
                <p className="contactDataText">г.Москва, ул. Каширское шоссе д.43 к.5 Метро (Каширская, Москворечье)</p>
              </div>
            </div>
            <div className="phone contactBlock">
              <div className="contactIcon">
                <img src={phone} alt="" />                
              </div>
              <div className="contactData">
                <p className="contactDataTitle">Телефон</p>
                <p className="contactDataText">
                  <a href="tel:+77346972907">(734) 697-2907</a>
                  <a href="tel:+78439711906">(843) 971-1906</a>
                </p>
              </div>
            </div>
            <div className="email contactBlock">
              <div className="contactIcon">
                <img src={mail} alt="" />                
              </div>
              <div className="contactData">
                <p className="contactDataTitle">E-mail</p>
                <p className="contactDataText">
                  <a href="mailto:noreply@envato.com">noreply@envato.com</a>
                  <a href="mailto:noreply@consultio.com">noreply@consultio.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="form">
            <FooterForm />
          </div>
        </div>
      </div>
    </div>
  );
};