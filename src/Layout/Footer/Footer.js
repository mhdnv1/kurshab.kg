import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer__nav">
                    <ul className="footer__contacts">
                        <li><Link to='#'>Logo</Link></li>
                        <li><Link to='#'>address</Link></li>
                        <li><Link to='#'>nomber</Link></li>
                        <li><Link to='#'>email</Link></li>
                    </ul>
                    <ul>
                        <li><Link to='#'>Главная</Link></li>
                        <li><Link to='#'>Услуги</Link></li>
                        <li><Link to='#'>О нас</Link></li>
                        <li><Link to='#'>Контакты</Link></li>
                    </ul>   
                    <ul className="footer__networks">
                        <li><Link to='#'>Whatsapp</Link></li>
                        <li><Link to='#'>Telegram</Link></li>
                        <li><Link to='#'>Instagram</Link></li>
                        <li><Link to='#'>Facebook</Link></li>
                    </ul>
                </nav>
                <p className="copy__text">Copyright coderun©2021</p>
            </div>
        </footer>
    );
}

export default Footer;
