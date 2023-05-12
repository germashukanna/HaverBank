import React from 'react';
import logo from '../../assets/image/logo.svg';
import s from './Header.module.scss';

const Header = () => {
    return (
        <div className={s.headerContainer}>
            <img src={logo} alt="logo" className={s.logo}/>
            <div className={s.navigation}>
                <a>FAQ</a>
                <a>Связаться с нами</a>
                <a>Консультантам</a>
                <a>Частным клиентам</a>
            </div>
            <button className={s.btn}>Войти</button>
        </div>
    )
}

export default Header