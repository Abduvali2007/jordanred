import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Addproduct from "./components/Addporduct";
import BuyNow from "./components/BuyNow";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/buynow" element={<BuyNow />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
