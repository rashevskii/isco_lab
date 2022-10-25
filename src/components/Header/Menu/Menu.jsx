import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
import mainLogo from "../../../assets/icons/logo.svg";
import { BurgerMenu } from "./BurgerMenu";
import { HashLink } from 'react-router-hash-link';

export const Menu = () => {
  const [showedSubMenu, setShowedSubMenu] = useState(false);
  const [showedBurgerMenu, setShowedBurgerMenu] = useState(false);
  const [location, setLocation] = useState("");

  useEffect(() => {
    setLocation(document.location.pathname);
  }, []);

  return (
    <div className="menuWrapper">
      <Link to="/" className="logo">
        <img src={mainLogo} alt="Логотип" />
        <span className="logoName">ISCO LAB</span>
      </Link>
      <nav className="menu">
        <div onClick={() => setShowedBurgerMenu(true)} className="burgerWrapper">
          <span className="burger"></span>
          <span className="burger"></span>
          <span className="burger"></span>
        </div>
        {showedBurgerMenu ? <BurgerMenu showBurger={setShowedBurgerMenu} /> : null}
        <ul className="menuInner">
          <li className="menuItem">
            {location === "/" ? (
              <a href="#aboutUs" className="menuLink">
                О нас
              </a> 
            ) : (
              <HashLink to={"/#aboutUs"} className="menuLink">О нас</HashLink>
            )}
          </li>
          <li
            onMouseEnter={() => setShowedSubMenu(true)}
            onMouseLeave={() => setShowedSubMenu(false)}
            className="menuItem learnMoreItemMenu"
          >
            <a href="#learnMore" className="menuLink">
              Узнайте больше
            </a>
            {showedSubMenu ? (
              <ul
                onMouseLeave={() => setShowedSubMenu(false)}
                onMouseEnter={() => setShowedSubMenu(true)}
                className="subMenu"
              >
                <li className="subMenuItem">
                  <Link to={'/research'}>Исследование</Link>
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
            ) : null}
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
