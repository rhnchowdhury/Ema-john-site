import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    const { name, img, price, ratings, seller } = product;
    // console.log(product)
    return (
        <div className='product-section'>
            <img src={img} alt="" />
            <div className='card-text'>
                <h6 className='name'>{name}</h6>
                <h6 className='price'>Price: ${price}</h6>
                <p className='seller'><small>Seller: {seller}</small></p>
                <p className='ratings'><small>Ratings: {ratings} star</small></p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(product)}>Add to Cart<FaCartPlus className='icon'></FaCartPlus></button>
        </div>
    );
};

export default Product;