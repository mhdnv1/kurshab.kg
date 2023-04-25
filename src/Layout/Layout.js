import React, { useEffect, useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './Header/Header';
import Home from '../components/Home/Home';
import './layout.scss'
import Footer from './Footer/Footer';
import Services from '../components/Services/Services';
import About from '../components/About/About';
import Contacts from '../components/Contacts/Contacts'
import ProductId from '../components/Home/productID/productId';
import HeaderTop from './HeaderTop/HeaderTop';


import Admin from '../components/Admin/Admin';
import Singlepage from '../components/Admin/SinglePage';
import Clearance from '../components/Admin/Clearance/Clearance';
export const ContextProductsId = createContext({
    cardsIdContext: [],
    setCardsIdContext: () => { }
});
export const ContextProducts = createContext({
    cardsContext: [],
    setCardsContext: () => { }
});
export const ContextSumma = createContext({
    summa: [],
    setSumma: () => { }
});

const Layout = () => {
    const [cardsContext, setCardsContext] = useState([]);
    const value1 = { cardsContext, setCardsContext };

    const [cardsIdContext, setCardsIdContext] = useState([]);
    const value2 = { cardsIdContext, setCardsIdContext };


    const [summa, setSumma] = useState([]);
    const value3 = { summa, setSumma };
    return (
        <div className="layout">
            <ContextProducts.Provider value={value1}>
                <ContextProductsId.Provider value={value2}>
                    <ContextSumma.Provider value={value3}>
                        <HeaderTop />
                        <Header />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/:id' element={<ProductId />} />
                            <Route path='/services' element={<Services />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/contacts' element={<Contacts />} />
                            <Route path='/admin' element={<Admin />} />
                            <Route path='/admin/:id' element={<Singlepage />} />
                            <Route path='/clearance' element={<Clearance />} />
                        </Routes>
                        <Footer />
                    </ContextSumma.Provider>
                </ContextProductsId.Provider>
            </ContextProducts.Provider>
        </div >
    );
}

export default Layout;
