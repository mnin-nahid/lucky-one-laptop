import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('laptop.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const addToCart = (name) => {
        const newCart = [...cart, name];
        setCart(newCart);
    }
    return (
        <div className='products'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        addToCart= {addToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Selected Items: {cart.length}</h3>
                {
                    cart.map(productName => <h5>{productName}</h5>)
                }
            </div>
        </div>
    );
};

export default Products;