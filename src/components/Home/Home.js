import React from 'react';
import { DemoCarousel } from './Carusel/Carusel';
import cardImg from '../../Asets/Home/Cards/1.jpg'
import About from '../About/About'
import './home.scss'

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <nav className="home__nav">
                    <select className="home__categoryes">
                        <option>Все товары</option>
                        <option>Товар 1</option>
                        <option>Товар 2</option>
                        <option>Товар 3</option>
                        <option>Товар 4</option>
                    </select>
                    <form className="home__search">
                         <input type="text" placeholder='Напишите называные товара' />
                         <button>SEARCH</button>
                    </form>
                </nav>
            </div>
            <DemoCarousel/>
            <div className="container">
                <div className="cards">
                    <div className="card">
                        <img src={cardImg} alt="" />
                         <h6>Перфоратор MAKITA HR2470</h6>
                         <p>10 111сом</p>
                    </div>
                    <div className="card">
                        <img src={cardImg} alt="" />
                         <h6>Перфоратор MAKITA HR2470</h6>
                         <p>10 111сом</p>
                    </div>
                    <div className="card">
                        <img src={cardImg} alt="" />
                         <h6>Перфоратор MAKITA HR2470</h6>
                         <p>10 111сом</p>
                    </div>
                    <div className="card">
                        <img src={cardImg} alt="" />
                         <h6>Перфоратор MAKITA HR2470</h6>
                         <p>10 111сом</p>
                    </div>
                    <div className="card">
                        <img src={cardImg} alt="" />
                         <h6>Перфоратор MAKITA HR2470</h6>
                         <p>10 111сом</p>
                    </div>
                    <div className="card">
                        <img src={cardImg} alt="" />
                         <h6>Перфоратор MAKITA HR2470</h6>
                         <p>10 111сом</p>
                    </div>
                    <div className="card">
                        <img src={cardImg} alt="" />
                         <h6>Перфоратор MAKITA HR2470</h6>
                         <p>10 111сом</p>
                    </div>
                    <div className="card">
                        <img src={cardImg} alt="" />
                         <h6>Перфоратор MAKITA HR2470</h6>
                         <p>10 111сом</p>
                    </div>
                </div>
            </div>
            <About/>
        </div>
    );
}

export default Home;
