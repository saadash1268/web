import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/About";
import ProductList from "./components/productList/ProductList";


const App = () => {
  return ( 
    <div>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
};

export default App;