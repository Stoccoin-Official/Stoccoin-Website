import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Widget1 from "../components/crypto/Widget1";
// import Widget2 from "../components/crypto/Widget2";
import Widget3 from "../components/crypto/Widget3";
import Header from "../components/crypto/Header";
import CoinCard from "../components/crypto/CoinCard";

const Cryptocurrencies = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <br />
      <Widget1/>
      <br />
      {/* <Widget2 /> */}
      <br/>
      <Widget3 />
      <br/>
      <Footer />
    </div>
  );
};

export default Cryptocurrencies;
