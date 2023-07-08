import CryptoWidget from "../components/news/CryptoWidget";
import Header from "../components/news/Header";
import StocksWidget from "../components/news/StocksWidget";

const News = () => {
  return (
    <div>
      <Header />
      <br/>
      <CryptoWidget />
      <br/>
      <StocksWidget />
      <br/>
    </div>
  );
};

export default News;
