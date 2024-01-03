import "./productList.css";
import Product from "../product/Product";
import gardenGenieImage from "../../assets/GardenGenieSC.png";
import pokedexImage from "../../assets/PokedexSC.png";
import GardenGenie from "../../assets/GardenGenie.mp4";
import Pokedex from "../../assets/Pokedex.mp4";
import { useState } from "react";

const ProductList = () => {


  const [showGardenGeniePopup, setShowGardenGeniePopup] = useState(false);
  const [showPokedexPopup, setShowPokedexPopup] = useState(false);

  const handleGardenGenieVideoButtonClick = () => {
    setShowGardenGeniePopup(true);
  };

  const handleCloseGardenGenieVideoPopup = () => {
    setShowGardenGeniePopup(false);
  };

  const handlePokedexVideoButtonClick = () => {
    setShowPokedexPopup(true);
  };

  const handleClosePokedexVideoPopup = () => {
    setShowPokedexPopup(false);
  };
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
      </div>
      <div className="pl-content">
        <div className="pl-item">
          <Product imageSrc={gardenGenieImage} />
          <p>
            Garden Genie was created to assist gardening novices in starting their gardening journey by providing plant recommendations based on users' needs. This project served as the final assignment during my bootcamp, completed collaboratively over four weeks by our team.
          </p>
          <div>
            <button onClick={handleGardenGenieVideoButtonClick}>Watch Demo</button>
          </div>
        </div>
        <div className="pl-item">
          <Product imageSrc={pokedexImage} />
          <p>
            Pokémon has always held a special place in my childhood memories. Leveraging the Pokémon API, I crafted a Pokédex, seamlessly fetching and rendering data from the API and presenting it in an engaging card format.
          </p>
          <div>
            <button onClick={handlePokedexVideoButtonClick}>Watch Demo</button>
          </div>
        </div>
      </div>

      {showGardenGeniePopup && (
        <div className="video-modal-overlay">
          <div className="video-popup">
            <video width="560" height="315" controls>
              <source src={GardenGenie} type="video/mp4" />
            </video>
            <button onClick={handleCloseGardenGenieVideoPopup}>Close</button>
          </div>
        </div>
      )}

      {showPokedexPopup && (
        <div className="video-modal-overlay">
          <div className="video-popup">
            <video width="560" height="315" controls>
              <source src={Pokedex} type="video/mp4" />
            </video>
            <button onClick={handleClosePokedexVideoPopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;

// could add big bang theory game