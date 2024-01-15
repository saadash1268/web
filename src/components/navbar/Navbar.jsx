import './navbar.css'; 

const Navbar = () => {
  const handleCVDownload = () => {
    // this should download my cv
  }; 


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
      </div>
      <div className="cv-download">
        <button onClick={handleCVDownload}>Download CV</button>
      </div>
    </nav>
  );
};

export default Navbar;
