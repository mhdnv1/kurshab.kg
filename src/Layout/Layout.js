import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './Header/Header';
import Home from '../components/Home/Home';
import './layout.scss'
import Footer from './Footer/Footer';
import Services from '../components/Services/Services';
import About from '../components/About/About';
import Contacts from '../components/Contacts/Contacts'

const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default Layout;
