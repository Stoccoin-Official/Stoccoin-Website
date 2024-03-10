import Widget1 from "../components/stocks/Widget1";
import Header from "../components/stocks/Header";

const Stocks = ({ darkMode }) => {
  return (
    <div>
      <Header />
      <Widget1 darkMode={darkMode} />
      <br />
    </div>
  );
};

export default Stocks;
