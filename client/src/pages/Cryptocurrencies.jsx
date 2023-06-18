import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Widget1 from "../components/crypto/Widget1";
import Widget2 from "../components/crypto/Widget2";

const Cryptocurrencies = () => {
  return (
    <div>
      <Navbar />
        <h6 className="text-3xl text-left p-8 m-8">Cryptocurrencies Market Overview</h6>
      <br />
      <Widget1 />
      <br />
      <Widget2 />
      <Footer />
    </div>
  );
};

export default Cryptocurrencies;
