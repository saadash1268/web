import React from "react";
import "./productList.css";
import Product from "../product/Product";
import gardenGenieVideo from "../../assets/newCopy of Garden Genie by M.A.S.H.E.D Long.mp4";
import pokedexVideo from "../../assets/Pokedex.mp4";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl=texts">
        <h1 className="pl-title"> Add a title</h1>
        <p className="pl-desc">add some information describing here</p>
      </div>
      <div className="pl-list">
        <Product videoSrc={gardenGenieVideo} />
        <Product videoSrc={pokedexVideo} />
      </div>
    </div>
  );
};

export default ProductList;
