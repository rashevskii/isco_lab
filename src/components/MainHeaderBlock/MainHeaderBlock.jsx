import React from "react";
import { WhiteButton } from "../../ui/WhiteButton/WhiteButton";
import './MainHeaderBlock.scss'; 

export const MainHeaderBlock = ({ title, text, btn, img }) => {
  return (
    <div className="headerBlockWrapper">
      <div className="textWrapper">
        <h1 className="mainTitle">{title}</h1>
        <p className="mainDescription">{text}</p>

        {btn && <WhiteButton location={'/'} title={btn.title} />}
      </div>
      <img src={img} alt="Product" />
    </div>
  );
};
