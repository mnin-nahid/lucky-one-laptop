import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <div className='cart'>
            <img className='product-img' src={props.product.img} alt="" />
            <h5>{props.product.name}</h5>
        </div>
    );
};

export default Cart;