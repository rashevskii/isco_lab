import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
import mainLogo from "../../../assets/icons/logo.svg";

export const Menu = (e) => {
  const showSubMenu = () => {
    const subMenu = document.querySelector('.subMenu');
    const menuItem = document.querySelector('.learnMoreItemMenu>a');
    subMenu.classList.add("showSubMenu");
    menuItem.classList.add("showedSubMenu");
  };
  const hideSubMenu = () => {
    const subMenu = document.querySelector('.subMenu');
    const menuItem = document.querySelector('.learnMoreItemMenu>a');
    subMenu.classList.remove("showSubMenu");
    menuItem.classList.remove("showedSubMenu");
  };

  return (
    <div className="menuWrapper">
      <Link to="/" className="logo">
        <img src={mainLogo} alt="Логотип" />
        <span className="logoName">ISCO LAB</span>
      </Link>
      <nav className="menu">
        <ul className="menuInner">
          <li className="menuItem">
            <a href="#aboutUs" className="menuLink">
              О нас
            </a>
          </li>
          <li onMouseEnter={showSubMenu} className="menuItem learnMoreItemMenu">
            <a href="#learnMore" className="menuLink">
              Узнайте больше
            </a>
            <ul onMouseLeave={hideSubMenu} className="subMenu">
              <li className="subMenuItem">
                <Link>Исследование</Link>
              </li>
              <li className="subMenuItem">
                <Link>Моделирование</Link>
              </li>
              <li className="subMenuItem">
                <Link>Соц - Продукт</Link>
              </li>
              <li className="subMenuItem">
                <Link>Волонтёрство</Link>
              </li>
              <li className="subMenuItem">
                <Link>Школа/тренинг</Link>
              </li>
              <li className="subMenuItem">
                <Link>Оффлайн</Link>
              </li>
            </ul>
          </li>
          <li className="menuItem">
            <a href="#services" className="menuLink">
              Услуги
            </a>
          </li>
          <li className="menuItem">
            <a href="#news" className="menuLink">
              Новости
            </a>
          </li>
          <li className="menuItem">
            <a href="#partners" className="menuLink">
              Партнёры
            </a>
          </li>
          <li className="menuItem">
            <a href="#reviews" className="menuLink">
              Отзывы
            </a>
          </li>
          <li className="menuItem">
            <a href="#map" className="menuLink">
              Карта
            </a>
          </li>
          <li className="menuItem">
            <a href="#feedback" className="menuLink">
              Обратная связь
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
