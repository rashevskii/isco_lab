import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Main } from "../Main/Main";
import "./Menu.scss";
import mainLogo from "../../assets/icons/logo.svg";

export const Menu = () => {
  return (
    <div className="menuWrapper">
      <Router>
        <Link to="/" className="logo">
          <img src={mainLogo} alt="Логотип" />
          <span className="logoName">ISCO LAB</span>
        </Link>

        <Routes>
          <Route path="/" element={Main} />
        </Routes>
      </Router>
      <nav className="menu">
        <ul className="menuInner">
          <li className="menuItem">
            <a href="#" className="menuLink">
              О нас
            </a>
          </li>
          <li className="menuItem">
            <a href="#" className="menuLink">
              Узнайте больше
            </a>
          </li>
          <li className="menuItem">
            <a href="#" className="menuLink">
              Услуги
            </a>
          </li>
          <li className="menuItem">
            <a href="#" className="menuLink">
              Новости
            </a>
          </li>
          <li className="menuItem">
            <a href="#" className="menuLink">
              Партнёры
            </a>
          </li>
          <li className="menuItem">
            <a href="#" className="menuLink">
              Отзывы
            </a>
          </li>
          <li className="menuItem">
            <a href="#" className="menuLink">
              Карта
            </a>
          </li>
          <li className="menuItem">
            <a href="#" className="menuLink">
              Обратная связь
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
