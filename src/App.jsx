import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Navbar from "./components/navbar/Navbar";
import "./app.css"
import Skills from "./components/skills/Skills";

const App = () => {
  return ( 
    <div>

      <Navbar/>
      <Intro/>
      <div id="about">
      <About/>
      </div>
      <div id="skills">
      <Skills/>
      </div>
      <div id="projects">
      <ProductList/>
      </div>
      <div id="contact">
      <Contact/>
      </div>
    </div>
  );
};

export default App;