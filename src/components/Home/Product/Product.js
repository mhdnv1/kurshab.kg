import React from 'react';
import { Link } from 'react-router-dom';
import '../../Home/home.scss'

const Product = ({filterProducts}) => {
    return (
        <div className="cards">
            {
                filterProducts.map((item) => (
                    <div key={item.id} className="card__home">
                        <Link to={`/${item.id}`} >
                            <img src={item.image} alt="" /> 
                            <h2>{item.name}</h2>
                            {/* <div class="card-price">{item.price}</div> */}
                            {/* <div class="card-price">{item.productCode}</div> */}
                            {/* <p>{item.categoryId}</p> */}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Product;
