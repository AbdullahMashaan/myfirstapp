import './App.css';
import storeImage from "./levain bakery.jpeg";
import products from './products';

function App() {
  return (
    <div className="App"> 
      <h1> Levain Bakery</h1>
      <p> New York City's Most Famous Cookies</p>
      <img className="Store-image" src={storeImage}></img>



 <div className="product-container">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}

      </div>
    </div>
  );
}
export default App;

