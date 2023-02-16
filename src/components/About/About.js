import React from 'react';
import { BsFillBagCheckFill } from 'react-icons/bs'
import { SiMicrostrategy } from 'react-icons/si'
import { MdOutlineMiscellaneousServices, MdOutlineGppGood } from 'react-icons/md'
import { VscActivateBreakpoints } from 'react-icons/vsc'
import { TbTruckDelivery } from 'react-icons/tb'
import { CiTimer } from 'react-icons/ci'
import { RiCustomerServiceLine } from 'react-icons/ri'
import { FaUserCheck } from 'react-icons/fa'
import './about.scss'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <h1 className="text-center">О компании <br />
                    «Kurshab.kg» — ответственность перед клиентом</h1>
                <p>Гарантируем клиентам оптимальный выбор лучших товаров от ведущих мировых брендов, профессиональные консультации, своевременную доставку заказа и помощь на всех этапах сотрудничества.</p>
                <div className="about__blog">
                    <ul>
                        <li><BsFillBagCheckFill className='about__icons' />600 брендов</li>
                        <li><SiMicrostrategy className='about__icons' />Единый тариф на доставку в регионах присутствия</li>
                        <li><MdOutlineMiscellaneousServices className='about__icons' />Служба установки и сервиса</li>
                    </ul>
                    <ul>
                        <li><CiTimer className='about__icons' />5 минут на обработку заказа</li>
                        <li><VscActivateBreakpoints className='about__icons' />Пункты самовывоза</li>
                        <li><MdOutlineGppGood className='about__icons' />Гарантия производителя, возврат, обмен</li>
                    </ul>
                    <ul>
                        <li><TbTruckDelivery className='about__icons' />Зоны льготной доставки</li>
                        <li><RiCustomerServiceLine className='about__icons' />Профессиональные консультации</li>
                        <li><FaUserCheck className='about__icons' />Бесплатные дизайн-решения для клиентов</li>
                    </ul>
                </div>
                <p>Мы вышли на рынок как небольшая розничная точка по продаже сантехники. В скором времени появился сайт, а 24 февраля 2023 года на  «Kurshab.kg» была сделана первая покупка – душевая кабина. <br/><br/>

Мы улучшали наши услуги и совершенствовали сервисы интернет-магазина. За 10 лет в десятки раз вырос наш ассортимент. Мы создали удобную навигацию по сайту, чтобы покупателям легче было сделать единственно верный выбор; в помощь клиентам привлекли к сотрудничеству дизайнеров; организовали работу контакт-центра так, чтобы каждый клиент получил профессиональную консультацию в любую минуту независимо от часового пояса, в котором он живет. <br/><br/>
Сейчас  «Kurshab.kg» – лидер рынка сантехнических товаров. Обращаясь к нам, можете быть уверены – мы поможем создать идеальное пространство для жизни.
</p>
            </div>
        </div>
    );
}

export default About;
