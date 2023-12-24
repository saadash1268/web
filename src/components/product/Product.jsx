import React from "react";
import "./product.css";

const Product = ({ videoSrc }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle">
          <video src={videoSrc} width="600" height="300" controls autoPlay={false} />
        </div>
      </div>
    </div>
  );
};

export default Product;
