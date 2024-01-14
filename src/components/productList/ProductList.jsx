import "./productList.css";
import Product from "../product/Product";
import gardenGenieImage from "../../assets/GardenGenieSC.png";
import pokedexImage from "../../assets/PokedexSC.png";
import GardenGenie from "../../assets/GardenGenie.mp4";
import Pokedex from "../../assets/Pokedex.mp4";
import codecardsImage from "../../assets/Codecards.png"
import codecardsVideo from "../../assets/Codecards.mp4"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProductList = () => {


  const [showGardenGeniePopup, setShowGardenGeniePopup] = useState(false);
  const [showPokedexPopup, setShowPokedexPopup] = useState(false);
  const [showCodecardPopup, setShowCodecardPopup] = useState(false);

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

  const handleCodecardVideoButtonClick = () => {
    setShowCodecardPopup(true);
  };

  const handleCloseCodecardVideoPopup = () => {
    setShowCodecardPopup(false);
  }

  return (
    <div className="pl">
  <div className="pl-texts">
    <h1 className="pl-title">Projects</h1>
  </div>
  <div className="pl-content">
    
    <section className="pl-item">
      <div className="image-container">
        <Product imageSrc={gardenGenieImage} alt="Garden Genie Project" />
      </div>
      <div className="content">
        <p className="description">
          Garden Genie was created to assist gardening novices in starting their gardening journey by providing plant recommendations based on users' needs. This project served as the final assignment during my bootcamp, completed collaboratively over four weeks by our team. // need to add tech stack
        </p>
        <div className="project-actions">
          <a href="https://github.com/M-A-S-H-E-D6/M.A.S.H.E.D_Garden_Genie" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <button onClick={() => window.open("https://garden-genie.netlify.app/", "_blank")} className="button live-link">
            Visit
          </button>
          <button onClick={handleGardenGenieVideoButtonClick} className="button demo-button">
            Demo
          </button>
        </div>
      </div>
    </section>
    
    <section className="pl-item">
  <div className="image-container">
    <Product imageSrc={pokedexImage} alt="Pokédex Project" />
  </div>
  <div className="content">
    <p className="description">
      Pokémon has always held a special place in my childhood memories. Leveraging the Pokémon API, I crafted a Pokédex, seamlessly fetching and rendering data from the API and presenting it in an engaging card format.
    </p>
    <div className="project-actions">
      <a href="https://github.com/saadash1268/Pokedex-" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <button onClick={handlePokedexVideoButtonClick} className="button demo-button">
        Demo
      </button>
    </div>
  </div>
</section>

<section className="pl-item">
  <div className="image-container">
    <Product imageSrc={codecardsImage} alt="Codecards Project" />
  </div>
  <div className="content">
    <p className="description">
      Add codecard description
    </p>
    <div className="project-actions">
      <a href="https://github.com/SchoolOfCode/bc14_w7_project-frontend-sorcerers-of-code" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <button onClick={handleCodecardVideoButtonClick} className="button demo-button">
        Demo
      </button>
    </div>
  </div>
</section>
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

      {showCodecardPopup && (
        <div className="video-modal-overlay">
          <div className="video-popup">
            <video width="560" height="315" controls>
              <source src={codecardsVideo} type="video/mp4" />
            </video>
            <button onClick={handleCloseCodecardVideoPopup}>Close</button>
          </div>
        </div>
      )}
    </div>

    
  );
};

export default ProductList;

// could add big bang theory game