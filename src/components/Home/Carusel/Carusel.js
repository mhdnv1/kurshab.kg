import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../Asets/Home/Carusel/1.png'
import img2 from '../../../Asets/Home/Carusel/2.png'
import img3 from '../../../Asets/Home/Carusel/3.png'
import './carusel.scss'

export class  DemoCarousel extends Component {
    render() {
        return (
            <Carousel className="carusel">
                <div>
                    <img src={img1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={img2}/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={img3} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }
};

