import React from "react";
import "./product.css";

const Product = ({ imageSrc }) => {
  return (
    <div className="p">
      
        <div className="p-circle">
            <img src={imageSrc} alt="product" style={{width:"100%", height:"100%"}}/>
        </div>
      
    </div>
  );
};

export default Product;
