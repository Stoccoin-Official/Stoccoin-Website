import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Stocks from "./pages/Stocks";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import News from "./pages/News";
import NFT from "./pages/NFT";
import Trade from "./pages/Trade";
import Institutional from "./pages/Institutional";
import Derivatives from "./pages/Derivatives";
import Support from "./pages/Support";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Stocks" element={<Stocks />} />
          <Route path="/Cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/News" element={<News />} />
          <Route path="/NFT" element={<NFT />} />
          <Route path="/Trade" element={<Trade />} />
          <Route path="/Institutional" element={<Institutional />} />
          <Route path="/Derivatives" element={<Derivatives />} />
          <Route path="/Support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
