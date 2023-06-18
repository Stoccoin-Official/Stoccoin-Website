import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TradingViewWidget from "../components/TradingViewWidget";
import TradingViewWidget1 from "../components/TradingViewWidget1";

const Cryptocurrencies = () => {
  return (
    <div>
      <Navbar />
        <h6 className="text-3xl text-left p-8 m-8">Cryptocurrencies Market Overview</h6>
      <TradingViewWidget1 />
      <br/>
      <TradingViewWidget />
      <Footer />
    </div>
  );
};

export default Cryptocurrencies;
