import React from "react";
import "../style/Hero.scss"
import {red, purple} from "../assets"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1 className="hero__left-title">
          Зарабатывайте<br/> больше <br/><span className="hero__left-span">с WELBEX</span>
        </h1>
        <p className="hero__left-text">
          Развиваем и контролируем<br/> продажи за вас
        </p>
      </div>
      <div className="hero__right">
        <div className="hero__right-title">
          <h3 className="hero__right-h">
            Вместе с <span className="hero__left-span" >бесплатной<br/> консультацией</span> мы дарим:
          </h3>
        </div>
        <div className="hero__red">
        <img className="hero__red-img" src={red} alt="red boll" />
      </div>
      <div className="hero__purple">
        <img className="hero__purple-img" src={purple} alt="red boll" />
      </div>
        <div className="hero__right-option">
          <div className="right__option-conteiner">
            <h5 className="right__option-title"><span></span>Виджеты</h5>
            <p className="right__option-text">30 готовых <br/>решений</p>
          </div>
          <div className="right__option-conteiner">
            <h5 className="right__option-title"><span></span>dashboard</h5>
            <p className="right__option-text">с показателями <br/> вашего бизнеса</p>
          </div>
          <div className="right__option-conteiner">
            <h5 className="right__option-title"><span></span>skype аудит</h5>
            <p className="right__option-text">отдела продаж <br/> и CRM систем</p>
          </div>
          <div className="right__option-conteiner">
            <h5 className="right__option-title"><span></span>35 дней</h5>
            <p className="right__option-text">использований <br/> CRM</p>
          </div>
        </div>
        <div className="hero__right-button">
          <button className="hero__right-btn">Получить консультацию</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
