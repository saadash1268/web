import About from "./components/about/About";
import Intro from "./components/intro/About";
import ProductList from "./components/productList/ProductList";


const App = () => {
  return ( 
    <div>
      <Intro/>
      <About/>
      <ProductList/>
    </div>
  );
};

export default App;