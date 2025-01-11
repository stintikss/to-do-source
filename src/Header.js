import React, { useState, useEffect } from 'react';
import './CSS/Header.css';

function Header() {
    return (
        <header className="header">
          <div className="header__logo">
            <img src={require("./image/image 5.png")} alt="To Do" className="header__logo-img" />
            <span>To Do</span>
          </div>
          <nav className="header__nav">
            <a href="#updates">Обновления</a>
            <a href="#support" className='support'>Поддержка</a>
            <a href="#developers">Разработчикам</a>
            <a href="#agreement" className='accept'>Соглашение</a>
          </nav>
          <div className="header__actions">
            <div className='header__login'>
                <p>Войти</p>
                <img src={require("./image/login-img.png")}/>
            </div>
            <div className='button_down'>
               <button className="header__download">Скачать To Do</button> 
            </div>
            
          </div>
        </header>
      );
}

export default Header