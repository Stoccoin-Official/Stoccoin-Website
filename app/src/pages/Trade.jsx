import Header from "../components/trade/Header";
import StocksWidget from "../components/trade/StocksWidget";
import CryptoWidget from "../components/trade/CryptoWidget";

const Trade = ({ darkMode }) => {
  return (
    <div>
      <Header />
      <br />
      <CryptoWidget darkMode={darkMode} />
      <br />
      <StocksWidget darkMode={darkMode} />
      <br />
    </div>
  );
};

export default Trade;
