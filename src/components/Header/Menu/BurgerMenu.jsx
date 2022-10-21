import { Link } from "react-router-dom";

export const BurgerMenu = () => {
  return (
    <div className="burgerMenu">
      <div className="burgerWrapper">
        <span className="burger"></span>
        <span className="burger"></span>
        <span className="burger"></span>
      </div>
      <div className="burgerMenuWrapper">
        <ul className="burgerMenuList">
          <li className="menuBurgerItem">
            <a href="#aboutUs" className="menuLink">
              О нас
            </a>
          </li>
          <li className="menuBurgerItem learnMoreBurgerMenu">
            <a href="#learnMore" className="menuLink">
              Узнайте больше
            </a>
            <ul className="subMenuBurger">
              <li className="subMenuBurgerItem">
                <Link>Исследование</Link>
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
