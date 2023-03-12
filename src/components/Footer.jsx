import React from 'react'
import { telegram, whatsapp, viber } from '../assets' 
import "../style/Footer.scss"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__left'>
        <div className='footer__left-about'>
          <h5 className='footer__title'>О комании</h5>
          <ul className='footer__left-list'>
            <li><a className='footer__left-link' href="#">Партнеская программа</a></li>
            <li><a className='footer__left-link' href="#">Вакансии</a></li>
          </ul>
        </div>
        <div className='footer__left-menu'>
        <h5 className='footer__title'>Меню</h5>
        <div className='footer__left-container'>
          <ul className='footer__left-list'>
            <li><a className='footer__left-link' href="#">Расчёт стоимости</a></li>
            <li><a className='footer__left-link' href="#">Услуги</a></li>
            <li><a className='footer__left-link' href="#">Виджеты</a></li>
            <li><a className='footer__left-link' href="#">Интеграции</a></li>
            <li><a className='footer__left-link' href="#">Наши клиенты</a></li>
            </ul>
            <ul className='footer__left-list'>
            <li><a className='footer__left-link' href="#">Кейсы</a></li>
            <li><a className='footer__left-link' href="#">Благодарственные письма</a></li>
            <li><a className='footer__left-link' href="#">Сертифакты</a></li>
            <li><a className='footer__left-link' href="#">Блог на Youtube</a></li>
            <li><a className='footer__left-link' href="#">Вопро/ответ</a></li>
          </ul>
          </div>
        </div>
      </div>
      <div className='footer__right'>
        <div className='footer__right-contacts'>
          <h5 className='footer__title'>Контакты</h5>
          <a href="#">+7 555 555-55-55</a>
          <ul className='footer__right-list'>
            <li><a className='footer__right-link' href="#"><img className='footer__right-img' src={telegram} alt="" /></a></li>
            <li><a className='footer__right-link' href="#"><img className='footer__right-img' src={viber} alt="" /></a></li>
            <li><a className='footer__right-link' href="#"><img className='footer__right-img' src={whatsapp} alt="" /></a></li>
          </ul>
          <p>Москва, Путевой проезд 3с1, к 902</p>
        </div>
        <div className='footer__right-mark'>
          <p>©WELBEX 2022. Все права защищены.</p>
          <p><a href="#">Политика конфиденциальности</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer