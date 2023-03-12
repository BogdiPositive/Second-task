import React from 'react'
import "../style/Nav.scss"

const Nav = () => {
  return (
    <nav className='nav'>
    <div className='nav__mobile'>
        <ul className='nav__mobile-list'>
            <li><a className='nav__mobile-link' href="">Услуги</a></li>
            <li><a className='nav__mobile-link' href="">Виджеты</a></li>
            <li><a className='nav__mobile-link' href="">Интеграции</a></li>
            <li><a className='nav__mobile-link' href="">Кейсы</a></li>
        </ul>
    </div>
    <div className='nav__desktop'>
        <ul className='nav__desktop-list'>
            <li><a className='nav__desktop-link' href="">Услуги</a></li>
            <li><a className='nav__desktop-link' href="">Виджеты</a></li>
            <li><a className='nav__desktop-link' href="">Интеграции</a></li>
            <li><a className='nav__desktop-link' href="">Кейсы</a></li>
            <li><a className='nav__desktop-link' href="">Сертификаты</a></li>
        </ul>
    </div>
    </nav>
  )
}

export default Nav