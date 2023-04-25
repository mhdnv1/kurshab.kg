import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const SliderProduct = ({ productsSlider }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <Carousel className="container p-2"
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 1s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={{deviceType}}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {
                productsSlider && productsSlider.map((item) => (
                    <div style={{
                        width: '270px',
                        height: '270px',
                        padding: '20px',
                        display: 'flex',
                        justifyContent: "center",
                        boxShadow: '10px 10px 5px 0px rgba(171,98,98)',
                        borderRadius: "10px",
                        background: '#F5F5F5'
                    }}>
                        <Link to={`/${item.id}`} >
                            <img
                                src={item.image}
                                alt="img"
                                style={{ width: "100%", height: '176px' }} />
                            <h2 style={{
                                background: "#fff",
                                marginTop: "10px",
                                fontWeight:'900',
                                fontSize:'20px',
                                lineHeight:'50px',
                                display:'flex',
                                alignItems:'center',
                                textAlign:'center',
                                color: '#2A2A2A'
                                }} className="card-title">{item.name}...</h2>
                        {/* <div class="text-dark">{item.price}$</div>
                            <div class="text-dark">{item.productCode}$</div> */}
                    </Link>
                    </div>
    ))
}
        </Carousel >
    );
}

export default SliderProduct;
