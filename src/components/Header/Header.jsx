import React from "react";
import { MainHeaderBlock } from "./MainHeaderBlock/MainHeaderBlock";
import { Menu } from "./Menu/Menu";
import "./Header.scss";
import pic from '../../assets/images/modelling.png';

export const Header = () => {
  const textForComp =
    "Являясь всего лишь частью общей картины, независимые государства.";
  return (
    <div className="headerWrapper blockContainer">
      <Menu />
      <MainHeaderBlock
        title={"Моделирование"}
        text={textForComp}
        btn={{ title: "Подробнее" }}
        img={pic}
      />
    </div>
  );
};
