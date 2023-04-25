import React, { useEffect, useState } from 'react';
import { DemoCarousel } from './Carusel/Carusel';
import About from '../About/About'
import Pagination from './Pagination/Pagination';
import './home.scss'
import axios from 'axios';
import Product from './Product/Product';
import SliderProduct from './SliderProduct/SliderProduct';
import DropdownComponent from './Dropdown/Dropdown';
import { BsFillTelephoneInboundFill } from 'react-icons/bs'
import Advertisement from './Advertisement/Advertisement';

const Home = () => {
    const [products, setProducts] = useState([])
    const [productsSlider, setProductsSlider] = useState([])
    const [categories, setCategories] = useState([])
    // Filter Category
    const [status, setStatus] = useState('1')

    // Pagination
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [countPage] = useState(9)
    const lastCount = page * countPage
    const firstCount = lastCount - countPage
    const currentCount = products.slice(firstCount, countPage)
    const paginate = pageNum => setPage(pageNum)

    // Search
    const [value, setValue] = useState('')
    const filterProducts = currentCount && currentCount.filter((item) => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    })

    useEffect(() => {
        setLoading(true)
        axios(`http://kurshab.ru/api/product/${page}/${status !== '1' ? status : '1'}`)
            .then(({ data }) => setProducts((data.rows)))
            .catch((eror) => console.log(eror))
        setLoading(false)
        axios(`http://kurshab.ru/api/product/category-products/1`)
            .then(({ data }) => setProductsSlider((data.rows)))
            .catch((eror) => console.log(eror))
    }, [status]);
    useEffect(() => {
        axios('http://kurshab.ru/api/category')
            .then(({ data }) => setCategories(data))
            .catch((eror) => console.log(eror))
    }, []);

    return (
        <div className="home">
            <div className="container">
                <nav className="home__nav">
                    <DropdownComponent status={status} setStatus={setStatus} categories={categories} />
                    <form className="home__search">
                        <input onChange={(e) => setValue(e.target.value)} type="text" placeholder='Напишите называные товара' />
                        <button>SEARCH</button>
                    </form>
                    <div className="home__nav__contact">
                        <div className="d-flex justify-content-beetwen" style={{gap:"20px"}}>
                            <div>
                                <a style={{color:"#000"}} href="#"><BsFillTelephoneInboundFill /></a>
                            </div>
                            <div>
                                <p><a style={{color:"#000"}} href="#">(+996)-990-000-935</a></p>
                                <p style={{color:"grey"}}>support 24/7</p>
                            </div>
                        </div>

                    </div>
                </nav>
            <DemoCarousel />
            </div>
            <section className="container">
                <h1 className="title__product">Популярные товары</h1>
                <SliderProduct productsSlider={productsSlider} />
            </section>
            <Advertisement/>
            <section style={{ padding: "50px 0px" }}>
                <div className="container">
                    <h1 className="title__product">Все товары</h1>

                    <Product filterProducts={filterProducts} />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Pagination
                            countPage={countPage}
                            totalCount={filterProducts.length}
                            paginate={paginate}
                            setPage={setPage}
                        />
                    </div>
                </div>
            </section>
            {/* <About /> */}
        </div>
    );
}

export default Home;


