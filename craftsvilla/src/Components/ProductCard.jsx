import React from 'react';
import "./ProductCard.css"
import {useDispatch} from "react-redux"
import { ADD} from '../Redux/Cart/action';

const ProductCard = ({product}) => {

  const dispatch = useDispatch()

  const handleCart = (product) =>{
    console.log(product)
    dispatch(ADD(product))
  }

  return (
    <div className='card'>
      <img src={product.image} alt="product-image" width="80%" style={{borderRadius:"20px"}}/>
      <h3>{product.title}</h3>
      <p><b>Category</b>:{product.category}</p>
      <p><b>Price</b>:{product.price}</p>
      <button className='btn' onClick={()=>handleCart(product)} >Add To Cart</button>
    </div>
  );
}

export default ProductCard;
