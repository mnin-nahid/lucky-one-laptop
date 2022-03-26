import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('laptop.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(newCart);
    }
    const clearCart = () => {
        const newCart = [];
        setCart(newCart);
    }
    const rendomOne = () => {
        // console.log(cart);
        const random = Math.floor(Math.random() * cart.length);
        const newCart = [cart[random]];
        console.log(newCart);
        setCart(newCart);
    }
    return (
        <div className='products'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Selected Items: {cart.length}</h2>
                {
                    cart.map(product => <Cart
                        key={product.id}
                        product={product} ></Cart>)
                }
                <div className='button-container'>
                    <button onClick={rendomOne}>Chose one</button>
                    <button onClick={clearCart}>Remove all</button>
                </div>
            </div>
        </div>
    );
};

export default Products;