import React from "react";
import Nav from "./Nav";
import {logo, viber, telegram, whatsapp, red, purple} from "../assets"
import "../style/Header.scss"
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo-img" src={logo} alt="logo" />
        <p className="header__logo-text">Крупный интегратор CRM <br></br> в Росcии и ещё 8 странах</p>
      </div>
      <div className="header__purple">
        <img className="header__purple-img" src={purple} alt="purple boll" />
      </div>
      <div className="header__red">
        <img className="header__red-img" src={red} alt="red boll" />
      </div>
      <Nav />
      <div className="header__contacts">
        <ul className="header__contacts-list">
          <li>
            <a className="header__contacts-link" href="#">
              +7 555 555-55-55
            </a>
          </li>
          <li>
            <a className="header__contacts-link" href="#">
              <img src={telegram} alt="telegram" />
            </a>
          </li>
          <li>
            <a className="header__contacts-link" href="#">
              <img src={viber} alt="viber" />
            </a>
          </li>
          <li>
            <a className="header__contacts-link" href="#">
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
