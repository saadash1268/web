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

  //disable the body scroll
  const disableBodyScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  //enable the body scroll 
  const enableBodyScroll = () => {
    document.body.style.overflow = 'auto';
  };


  const handleGardenGenieVideoButtonClick = () => {
    setShowGardenGeniePopup(true);
    disableBodyScroll();
  };

  const handleCloseGardenGenieVideoPopup = () => {
    setShowGardenGeniePopup(false);
    if (!showPokedexPopup && !showCodecardPopup) {
      enableBodyScroll();
    }
  };

  const handlePokedexVideoButtonClick = () => {
    setShowPokedexPopup(true);
    disableBodyScroll();
  };

  const handleClosePokedexVideoPopup = () => {
    setShowPokedexPopup(false);
    if (!showGardenGeniePopup && !showCodecardPopup) {
      enableBodyScroll();
    }
  };

  const handleCodecardVideoButtonClick = () => {
    setShowCodecardPopup(true);
    disableBodyScroll();

  };

  const handleCloseCodecardVideoPopup = () => {
    setShowCodecardPopup(false);
    if (!showGardenGeniePopup && !showPokedexPopup) {
      enableBodyScroll();
    }
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
        Garden Genie helps gardening beginners on their green journey, offering personalised plant recommendations based on individual needs. This final collaborative bootcamp project, developed over four weeks, leverages React and Bootstrap for the front-end, with Node.js and MongoDB powering the back-end. It's deployed on Netlify.

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
    Pokémon has always been a cherished part of my childhood, inspiring me to create a digital Pokédex. Using the Pokémon API, this project involved fetching and rendering data, and presenting it in a card format using HTML, CSS and JavaScript. 
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
    CodeCards is a flashcard app designed for bootcamp students to support their learning, created in a one-week collaborative effort during our sixth week at the bootcamp. This project leverages HTML, CSS, and React, with Vite significantly accelerating our development process    </p>
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