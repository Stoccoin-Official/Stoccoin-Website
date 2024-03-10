import CryptoWidget from "../components/news/CryptoWidget";
import Header from "../components/news/Header";
import StocksWidget from "../components/news/StocksWidget";

const News = ({ darkMode }) => {
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

export default News;
