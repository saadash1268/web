import React from "react";
import "./productList.css";
import Product from "../product/Product";
import gardenGenieImage from "../../assets/GardenGenieSC.png";
import pokedexImage from "../../assets/PokedexSC.png";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl=texts">
        <h1 className="pl-title"> Add a title</h1>
        <p className="pl-desc">add some information describing here</p>
      </div>
      <div className="pl-list">
        <Product imageSrc={gardenGenieImage} />
        <Product imageSrc={pokedexImage} />
      </div>
    </div>
  );
};

export default ProductList;

// could add big bang theory game