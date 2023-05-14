import React from 'react';

const style={
    textAlign:"center",
    margin:"10px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    padding:"10px",
    borderRadius:"10px"
}

const ProductCard = (props) => {
    const {image,title,price} = props;
  return (
    <div>
        <div className='card' style={style}>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{price}</p>
          <button style={{width:"50%",backgroundColor:"blue",color:"white",border:"none",padding:"10px",borderRadius:"5px"}} >Add To Cart</button>
        </div>
    </div>
  );
}

export default ProductCard;
