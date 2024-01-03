import "./product.css";

const Product = ({ imageSrc, videoSrc }) => {
  return (
    <div className="p">
      
        <div className="p-circle">
            <img src={imageSrc} alt="product" style={{width:"100%", height:"100%"}}/>
        </div>
        <div className="Video">
          <video src={videoSrc}></video>
        </div>
      
    </div>
  );
};

export default Product;
