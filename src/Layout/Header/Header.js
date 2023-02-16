import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

const Header = () => {
    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__nav-logo">
                        <h1>KURSHAB</h1>
                        <p>интернет-магазин</p>
                    </div>
                    <ul className="header__nav-menu">
                        <li><Link to='/'>Главная</Link></li>
                        <li><Link to='/services'>Услуги</Link></li>
                        <li><Link to='/about'>О нас</Link></li>
                        <li><Link to='/contacts'>Контакты</Link></li>
                    </ul>
                    {/* burger menu */}
                    <>
                        <nav className="nav">
                            <div className="burger-menu" onClick={updateMenu}>
                                <div className={burger_class}></div>
                                <div className={burger_class}></div>
                                <div className={burger_class}></div>
                            </div>
                        </nav>

                        <div className={menu_class}>
                        <li><Link to='/'>Главная</Link></li>
                        <li><Link to='/services'>Услуги</Link></li>
                        <li><Link to='/about'>О нас</Link></li>
                        <li><Link to='/contacts'>Контакты</Link></li>
                        </div>
                    </>
                </nav>
            </div>
        </header>
    );
}

export default Header;
