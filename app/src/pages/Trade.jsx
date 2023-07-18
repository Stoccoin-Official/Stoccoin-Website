import Header from "../components/trade/Header";
import StocksWidget from "../components/trade/StocksWidget";
import CryptoWidget from "../components/trade/CryptoWidget";

const Trade = () => {
  return (
    <div>
      <Header />
      <br />
      <CryptoWidget />
      <br />
      <StocksWidget />
      <br />
    </div>
  );
};

export default Trade;
