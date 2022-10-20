import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
import mainLogo from "../../../assets/icons/logo.svg";

export const Menu = () => {
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
          <li className="menuItem">
            <a href="#learnMore" className="menuLink">
              Узнайте больше
            </a>
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
