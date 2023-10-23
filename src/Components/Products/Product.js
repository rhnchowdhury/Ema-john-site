import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    const { name, img, price, ratings, seller } = product;
    console.log(product)
    return (
        <div className='product-section'>
            <img src={img} alt="" />
            <h6 className='name'>{name}</h6>
        </div>
    );
};

export default Product;