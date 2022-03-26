import React, { useEffect, useState } from 'react';
import './Products.css'

const Products = () => {
    const [product, setProduct] = useState([]);
    useEffect( () => {
        fetch('laptop.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div className='products'>
            <div className="products-container">
                <h1>Products: {product.length}</h1>
            </div>
            <div className="cart-container">
                <h3>Selected Items: </h3>
            </div>
        </div>
    );
};

export default Products;