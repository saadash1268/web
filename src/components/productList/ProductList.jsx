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
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


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
        Garden Genie is an intuitive app designed to help gardening beginners embark on their green journey with ease, offering personalised plant recommendations based on individual needs like time and space availability. Developed as our final collaborative bootcamp project over an intense four-week period. Garden Genie stands out with its unique features, guiding users from plant selection to ongoing care. // need to add tech stack
        </p>
        <div className="project-actions">
          <a href="https://github.com/M-A-S-H-E-D6/M.A.S.H.E.D_Garden_Genie" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <FontAwesomeIcon 
            icon={faPlay} 
            className="icon demo-button" 
            onClick={handleGardenGenieVideoButtonClick} 
          />
          <FontAwesomeIcon 
            icon={faArrowUpRightFromSquare} 
            className="icon live-link" 
            onClick={() => window.open("https://garden-genie.netlify.app/", "_blank")} 
          />
        </div>
      </div>
    </section>
    
    <section className="pl-item">
  <div className="image-container">
    <Product imageSrc={pokedexImage} alt="Pokédex Project" />
  </div>
  <div className="content">
    <p className="description">
    Pokémon has always been a cherished part of my childhood, inspiring me to create a digital Pokédex. Using the Pokémon API, this project involved fetching and rendering data, and presenting it in a card format. Each card showcases a Pokémon with its details, offering a visually engaging and user-friendly experience. This Pokédex not only rekindles nostalgia but also demonstrates my technical skills in API integration and front-end development.
    </p>
    <div className="project-actions">
      <a href="https://github.com/saadash1268/Pokedex-" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <FontAwesomeIcon 
        icon={faPlay} 
        className="icon demo-button" 
        onClick={handlePokedexVideoButtonClick} 
      />
    </div>
  </div>
</section>

<section className="pl-item">
  <div className="image-container">
    <Product imageSrc={codecardsImage} alt="Codecards Project" />
  </div>
  <div className="content">
    <p className="description">
    CodeCards is a dynamic flashcard app designed specifically for coding bootcamp students, leveraging spaced repetition to simplify and enhance the learning process. Created in a one-week collaborative effort during our sixth week at the bootcamp. It’s perfect for anyone embarking on or advancing their coding journey, offering an efficient and engaging way to absorb and retain complex coding concepts.
    </p>
    <div className="project-actions">
      <a href="https://github.com/SchoolOfCode/bc14_w7_project-frontend-sorcerers-of-code" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <FontAwesomeIcon 
        icon={faPlay} 
        className="icon demo-button" 
        onClick={handleCodecardVideoButtonClick} 
      />
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
            <button onClick={handleCloseGardenGenieVideoPopup}>X</button>
          </div>
        </div>
      )}

      {showPokedexPopup && (
        <div className="video-modal-overlay">
          <div className="video-popup">
            <video width="560" height="315" controls>
              <source src={Pokedex} type="video/mp4" />
            </video>
            <button onClick={handleClosePokedexVideoPopup}>X</button>
          </div>
        </div>
      )}

      {showCodecardPopup && (
        <div className="video-modal-overlay">
          <div className="video-popup">
            <video width="560" height="315" controls>
              <source src={codecardsVideo} type="video/mp4" />
            </video>
            <button onClick={handleCloseCodecardVideoPopup}>X</button>
          </div>
        </div>
      )}
    </div>

    
  );
};

export default ProductList;

// could add big bang theory game