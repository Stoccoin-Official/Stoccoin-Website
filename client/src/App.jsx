import {lazy,Suspense} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import {FaCircleNotch} from 'react-icons/fa'

const Homepage = lazy(()=> import("./pages/Homepage"));
const Dashboard = lazy(()=> import("./pages/Dashboard"));
const Stocks = lazy(()=> import("./pages/Stocks"));
const Cryptocurrencies = lazy(()=> import("./pages/Cryptocurrencies"));
const News = lazy(()=> import("./pages/News"));
const Trade = lazy(()=> import("./pages/Trade"));
const Institutional = lazy(()=> import("./pages/Institutional"));
const Derivatives = lazy(()=> import("./pages/Derivatives"));
const NFT = lazy(()=> import("./pages/NFT"))
const Support = lazy(()=> import("./pages/Support"));

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<FaCircleNotch className="spinner" size="5em"/>} >
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
