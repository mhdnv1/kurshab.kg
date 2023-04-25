import React from 'react';
import {AiOutlineMail ,AiOutlinePhone, AiOutlineWhatsApp,AiOutlineInstagram} from 'react-icons/ai'
import {RiTelegramLine} from 'react-icons/ri'
import {FiMapPin} from 'react-icons/fi'
import './headertop.scss'
const HeaderTop = () => {
    return (
        <div className="headertop">
            <div className="container">
                <nav className="headertop__nav">
                    <div className="headertop__left">
                        <span><a href="#"><AiOutlineMail/></a></span>
                        <span><a href="#"><FiMapPin/></a></span>
                    </div>
                    <div className="headertop__right">
                        <span><a href="#"><AiOutlinePhone/></a></span>
                        <span><a href="#"><AiOutlineWhatsApp/></a></span>
                        <span><a href="#"><AiOutlineInstagram/></a></span>
                        <span><a href="#"><RiTelegramLine/></a></span>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default HeaderTop;
