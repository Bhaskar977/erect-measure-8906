import React from 'react';
import ProductList from '../Components/ProductList';
import Sidebar from '../Components/Sidebar';
import "./Product.css"


const Product = () => {
  return (
    <div className='product'>
      <div>
        <Sidebar/>
      </div>
      <div>
        <ProductList/>
      </div>
    </div>
  );
}

export default Product;
