import './App.css';
import storeImage from "./levain bakery.jpeg";


function App() {
  return (
    <div className="App"> 
      <h1> Levain Bakery</h1>
      <p> New York City's Most Famous Cookies</p>
      <img className="Store-image" src={storeImage}></img>

    </div>
  );
}

export default App;
