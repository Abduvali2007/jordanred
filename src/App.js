import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Addproduct from "./components/Addporduct";
import BuyNow from "./components/BuyNow";
import Basket from "./components/Basket";
import Man from "./components/Header/Man";
import Woman from "./components/Header/Woman";
import Kid from "./components/Header/Kids";
import Sale from "./components/Header/Sale";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/buynow" element={<BuyNow />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/man" element={<Man />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/kid" element={<Kid />} />
        <Route path="/sale" element={<Sale/>} />
        <Route path="/search/:proName" element={<Search/>} />
      </Routes>
    </div>
  );
}

export default App;
