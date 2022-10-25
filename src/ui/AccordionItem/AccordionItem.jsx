import { useState } from "react";
import "./AccordionItem.scss";

export const AccordionItem = ({ stageNumber, description, content }) => {
  const [showedAccordion, setShowedAccordion] = useState(false);
  return (
    <div className={showedAccordion ? "accordionItem showedContent" : "accordionItem"}>
      <h3 onClick={() => setShowedAccordion(!showedAccordion)} className="accordionHeader">
        <span className="stage">ЭТАП {stageNumber}</span> - {description}
      </h3>
      {showedAccordion ? <p className="accordionContent">{content}</p> : null}
    </div>
  );
};
