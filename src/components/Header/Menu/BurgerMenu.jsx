import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export const BurgerMenu = ({ showBurger }) => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    setLocation(document.location.pathname);
  }, []);

  useEffect(() => {
    const burgerMenu = document.querySelector('.burgerMenu');
    const links = burgerMenu.querySelectorAll('a');
    links.forEach(link => link.addEventListener('click', () => showBurger(false)));
  }, [showBurger]);
    

  return (
    <div className="burgerMenu">
      <div  className="burgerMenuWrapper">
        <span onClick={() => showBurger(false)} className="closeMenuBurger">+</span>
        <ul className="burgerMenuList">
          <li className="menuBurgerItem">
            <a href="#aboutUs" className="menuLink">
              О нас
            </a>
          </li>
          <li className="menuBurgerItem learnMoreBurgerMenu">
          {location === "/" ? (
              <a href="#aboutUs" className="menuLink">
                О нас
              </a> 
            ) : (
              <HashLink to={"/#aboutUs"} className="menuLink">О нас</HashLink>
            )}
            <ul className="subMenuBurger">
              <li className="subMenuBurgerItem">
                <Link to={'/research'}>Исследование</Link>
              </li>
              <li className="subMenuBurgerItem">
                <Link>Моделирование</Link>
              </li>
              <li className="subMenuBurgerItem">
                <Link>Соц - Продукт</Link>
              </li>
              <li className="subMenuBurgerItem">
                <Link>Волонтёрство</Link>
              </li>
              <li className="subMenuBurgerItem">
                <Link>Школа/тренинг</Link>
              </li>
              <li className="subMenuBurgerItem">
                <Link>Оффлайн</Link>
              </li>
            </ul>
          </li>
          <li className="menuBurgerItem">
            <a href="#services" className="menuLink">
              Услуги
            </a>
          </li>
          <li className="menuBurgerItem">
            <a href="#news" className="menuLink">
              Новости
            </a>
          </li>
          <li className="menuBurgerItem">
            <a href="#partners" className="menuLink">
              Партнёры
            </a>
          </li>
          <li className="menuBurgerItem">
            <a href="#reviews" className="menuLink">
              Отзывы
            </a>
          </li>
          <li className="menuBurgerItem">
            <a href="#map" className="menuLink">
              Карта
            </a>
          </li>
          <li className="menuBurgerItem">
            <a href="#feedback" className="menuLink">
              Обратная связь
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
