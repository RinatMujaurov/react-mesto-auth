import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../images/header-logo.svg";

function Header({ isLoggedIn, email, onSignOut }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <button className={`menu-toggle ${isMenuOpen ? "open" : ""}`} onClick={handleToggleMenu}>
          {isMenuOpen ? (
            <span className="popup__close-button" />
          ) : (
            <>
              <span className="menu-toggle__bar" />
              <span className="menu-toggle__bar" />
              <span className="menu-toggle__bar" />
            </>
          )}
        </button>
        <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
          {renderHeaderText()}
        </nav>
      </header>
    </>
  );
}

//мозгов ни у меня, ни у chatGPT не хватает доработать бургер-меню. Потом доделаю (это вроде не обязательное задание)

export default Header;




// import React from "react";
// import { useLocation, Link } from "react-router-dom";
// import logo from "../images/header-logo.svg";


// function Header({isLoggedIn, email, onSignOut}) {
//   const location = useLocation();
 

//   const renderHeaderText = () => {
//     if (location.pathname === "/sign-up") {
//       return (
//         <Link to="/sign-in" className="header__link">
//           Вход
//         </Link>
//       );
//     } else if (location.pathname === "/sign-in") {
//       return (
//         <Link to="/sign-up" className="header__link">
//           Регистрация
//         </Link>
//       );
//     } else if (isLoggedIn) {
//       return (
//         <div className="header__nav">
//           {email}
//           <Link className='header__link' to={'/sign-in'} onClick={onSignOut}>
//               Выйти
//           </Link>
//         </div>
//       );
//     }
//   };

//   return (
//     <>
//       <header className="header">
//         <img src={logo} alt="логотип сайта" className="header__logo" />
//         {renderHeaderText()}
//       </header>
//     </>
//   );
// }

// export default Header;
