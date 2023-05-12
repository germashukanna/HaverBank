import React from 'react';
import logo from '../../assets/image/logo.svg';
import s from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={s.footerContainer}>
            <img src={logo} alt="logo" className={s.footerLogo}/>
            <div className={s.footerNavigation}>
                <a>Связаться с нами</a>
                <a>FAQ</a>
                <a>Политика конфиденциальности</a>
                <a>Условия использования</a>
            </div>
        </div>
    )
}

export default Footer