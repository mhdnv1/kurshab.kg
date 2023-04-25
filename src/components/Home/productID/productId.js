import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductId = () => {
    const [cards, setCard] = useState({})
    const { id } = useParams();
    const getApi = () => {
        axios.get(`http://kurshab.ru/api/product/single/${id}`)
            .then(({ data }) => setCard(data))
    }
    useEffect(() => {
        getApi()

    }, []);
    return (
        <div className="p-4">
            <Container>
                <div className="cards">
                    {
                        <div className="col-12 rounded p-4 mb-2" key={cards.id}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Carousel>
                                        {(cards != null && cards.images != null && cards.images.length > 0)?cards.images.map((item)=>{
                                            return (
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100 object-fit-cover"
                                                        style={{ backgroundPosition: 'center', height: "400px" }}
                                                        src={item} alt="First slide" loading='lazy' />
                                                </Carousel.Item>
                                            )
                                        }
                                        ) : ''}
                                    </Carousel>
                            </div>
                            <h3 className="text-center">{cards.name}</h3>
                            <p className="truncate text-center">{cards.description}</p>
                            <p className="text-center">цена:{cards.price}сом</p>
                            <p className="text-center">цена:{cards.productCode}сом</p>
                        </div>
                    }
                </div>
            </Container>
        </div>
    );
}
export default ProductId;
