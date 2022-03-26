import React from 'react';
import './Product.css';
import cartLogo from '../../cart-32.png'

const Product = (props) => {
    const { addToCart, product } = props;
    const { name, price, img } = product;
    return (
        <div className='cart-items'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <h4>Price : {price}</h4>

            </div>
            <button className='cart-button' onClick={() => addToCart(product)}>
                <p>Add Cart</p>
                <img src={cartLogo} alt="" />
            </button>
        </div>
    );
};

export default Product;