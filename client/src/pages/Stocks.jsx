import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Widget1 from "../components/stocks/Widget1";
import Widget2 from "../components/stocks/Widget2";
import Widget3 from "../components/stocks/Widget3";

const Stocks = () => {
  return (
    <div>
      <Navbar />
        <h6 className="text-3xl text-left p-8 m-8">Stock Market Overview</h6>
      <Widget1 />
      <br/>
      <Widget2 />
      <br />
      <Widget3 />
      <Footer />
    </div>
  );
};

export default Stocks;
