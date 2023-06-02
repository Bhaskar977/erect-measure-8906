import React from "react";

const Store = (props) => {
  const { image, title, distance} = props;

  const style = {
    display: "flex",
    border:"1px solid black",
    width: "80%",
    padding: "10px 10px 10px 10px",
    borderRadius:"10px",
    marginBottom:"10px"
  };

  return (
    <div>
      <div style={style}>
        <img width="18%" style={{ borderRadius: "50%" }} src={image} alt="" />
        <div>
          <h3>{title}</h3>
          <p>{distance}</p>
        </div>
      </div>
    </div>
  );
};

export default Store;
