import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../images/header-logo.svg";


function Header({isLoggedIn, email, onSignOut}) {
  const location = useLocation();
 

  const renderHeaderText = () => {
    if (location.pathname === "/sign-up") {
      return (
        <Link to="/sign-in" className="header__link">
          Вход
        </Link>
      );
    } else if (location.pathname === "/sign-in") {
      return (
        <Link to="/sign-up" className="header__link">
          Регистрация
        </Link>
      );
    } else if (isLoggedIn) {
      return (
        <div className="header__nav">
          {email}
          <Link className='header__link' to={'/sign-in'} onClick={onSignOut}>
              Выйти
          </Link>
        </div>
      );
    }
  };

  return (
    <>
      <header className="header">
        <img src={logo} alt="логотип сайта" className="header__logo" />
        {renderHeaderText()}
      </header>
    </>
  );
}

export default Header;
