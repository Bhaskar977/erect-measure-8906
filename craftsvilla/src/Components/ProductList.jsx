import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux"
import { getProducts } from '../Redux/Products/action';
import ProductCard from './ProductCard';
import styled from 'styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((store)=>store.productReducer.products)
    const location = useLocation();
    const [searchParams] = useSearchParams()
    

    useEffect(() => {
      const order = searchParams.get("order")
      let paramObj = {
        params:{
          category:searchParams.getAll("category"),
          _sort:order && "price",
          _order:order,
        }
      }
      dispatch(getProducts(paramObj))
    }, [location.search]);

  return (
    <DIVWrapper>
        <div className='wrap'>
      {products.length>0 && products.map((el)=>{
        return <ProductCard key={el.id} product={el}/>
      })}
        </div>
    </DIVWrapper>
  );
}

const DIVWrapper = styled.div`
 
.wrap{
    width:80%;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    margin:auto;
    margin-top:50px;
}
@media (min-width: 0px) and (max-width: 400px) {
    .wrap{
        display:grid;
        grid-template-columns:repeat(1,1fr);
    }
  }

  @media (min-width: 400px) and (max-width: 800px) {
    .wrap{
        display:grid;
        grid-template-columns:repeat(2,1fr);
    }
  }
  
`

export default ProductList;
