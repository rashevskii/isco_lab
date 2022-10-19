import { HeaderSection } from '../../ui/HeaderSection/HeaderSection';
import './Services.scss';
import { ServicesBlockWrapper } from './ServicesBlockWrapper';

export const Services = () => {
  return (
    <div className="servicesWrapper" id='services'>
      <div className="servicesInner blockContainer">
        <HeaderSection title={'Услуги'} />
        <ServicesBlockWrapper />
      </div>
    </div>
  );
};