import React from "react";
import "./productList.css";
import Product from "../product/Product";
import gardenGenieImage from "../../assets/GardenGenieSC.png";
import pokedexImage from "../../assets/PokedexSC.png";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        {/* <p className="pl-desc">A few projects </p> */}
      </div>
      <div className="pl-content">
        <div className="pl-item">
          <Product imageSrc={gardenGenieImage} />
          <p>Garden Genie was created to assist gardening novices in starting their gardening journey by providing plant recommendations based on users' needs. This project served as the final assignment during my bootcamp, completed collaboratively over four weeks by our team.</p>
        </div>
        <div className="pl-item">
          <Product imageSrc={pokedexImage} />
          <p>Pokémon has always held a special place in my childhood memories. Leveraging the Pokémon API, I crafted a Pokédex, seamlessly fetching and rendering data from the API and presenting it in an engaging card format</p>
        </div>

      </div>
    </div>
  );
};

export default ProductList;

// could add big bang theory game