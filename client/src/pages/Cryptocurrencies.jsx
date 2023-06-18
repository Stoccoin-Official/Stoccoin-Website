import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Widget1 from "../components/crypto/Widget1";
import Widget2 from "../components/crypto/Widget2";
import Widget3 from "../components/crypto/Widget3";

const Cryptocurrencies = () => {
  return (
    <div>
      <Navbar />
      <h6 className="text-3xl text-left p-8 m-8">Cryptocurrencies Market Overview</h6>
      <br />
      <Widget1 />
      <br />
      <Widget2 />
      <br/>
      <Widget3 />
      <br/>
      <Footer />
    </div>
  );
};

export default Cryptocurrencies;
