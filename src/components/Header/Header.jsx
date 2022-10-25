import React from "react";
import { MainHeaderBlock } from "./MainHeaderBlock/MainHeaderBlock";
import { Menu } from "./Menu/Menu";
import "./Header.scss";

export const Header = ({ title, text, btn, img }) => {
  return (
    <div className="headerWrapper blockContainer">
      <Menu />
      <MainHeaderBlock
        title={title}
        text={text}
        btn={btn}
        img={img}
      />
    </div>
  );
};
