import Widget1 from "../components/stocks/Widget1";
import Widget2 from "../components/stocks/Widget2";
import Widget3 from "../components/stocks/Widget3";
import Header from "../components/stocks/Header";

const Stocks = () => {
  return (
    <div>
      <Header />
      <Widget1 />
      <br/>
      <Widget2 />
      <br />
      <Widget3 />
    </div>
  );
};

export default Stocks;
