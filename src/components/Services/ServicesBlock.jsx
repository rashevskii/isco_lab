export const ServicesBlock = ({ title, text, specClass }) => {
  return (
    <div className={`servicesBlock ${specClass}`}>
      <h3 className="servicesTitle">{title}</h3>
      <p className="servicesText">{text}</p>
    </div>
  );
};