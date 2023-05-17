import React from 'react';
import "./ProductCard.css"

const ProductCard = ({product}) => {
  return (
    <div className='card'>
      <img src={product.image} alt="product-image" width="80%" style={{borderRadius:"20px"}}/>
      <h3>{product.title}</h3>
      <p><b>Category</b>:{product.category}</p>
      <p><b>Price</b>:{product.price}</p>
      <button className='btn' >Add To Cart</button>
    </div>
  );
}

export default ProductCard;
