import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import "./ProductList.css"


const getData = async(url) =>{
    try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data)
        return{
            totalCount: +res.headers.get(`X-Total-Count`),
            data:data
        }
    } catch (error) {
        console.log("error")
    }
}

const ProductList = () => {

    const [fashionProduct,setFashionProduct] = useState([])
    const [loading,setLoading] = useState(false)
    const [err,setErr] = useState(false)
    const [page,setPage] = useState(1)
    const [totalCount,setTotalCount] = useState(0)

    useEffect(()=>{
        fetchedData(page);
    },[page])

    const fetchedData = async(page) =>{
        setLoading(true)
        try {
            const res = await getData(`https://weak-teal-indri-boot.cyclic.app/Fashion?_page=${page}&_limit=12`)
            const {totalCount,data} = res;
            setFashionProduct(data)
            setTotalCount(totalCount)
            setLoading(false)
        } catch (error) {
            setErr(true)
        }
    }
    console.log(fashionProduct)
    if(loading){
        return <h1>Loading...</h1>
    }
    if(err){
        return <h1>Something went wrong...</h1>
    }
  return (
    <div>

    <div className='container'>
      {
        fashionProduct.map((el)=>{
            return <ProductCard image={el.image} title={el.title} price={el.price}/>
        })
      }
    </div>
    <div className='page'>
        <button className='btn' disabled={page===1} onClick={()=>setPage(page-1)}>Pre</button>
        <button>{page}</button>
        <button className='btn' onClick={()=>setPage(page+1)}>Next</button>
    </div>
    </div>
  );
}

export default ProductList;
