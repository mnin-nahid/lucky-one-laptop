import React from 'react';
import { addToCart } from '../Products/Products';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {name, price, img} = props.product;
    return (
        <div className='cart-items'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>Name : {name}</h3>
                <h4>Price : {price}</h4>
                <button onClick={() => props.addToCart(name)}>
                    <p>Add Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;