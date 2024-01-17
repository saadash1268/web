import './navbar.css'; 
import CV from "../../assets/CV.pdf";

const Navbar = () => {
  
  


  return (
    <nav className="navbar">
      <div className="logo">
        {/* design and add my logo here */}
        {/* <img src="path-logo.png" alt="Logo" /> */}
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href={CV} download className="cv-download">CV</a>
      </div>
    </nav>
  );
};

export default Navbar;
