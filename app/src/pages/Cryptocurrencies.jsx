import Widget1 from "../components/crypto/Widget1";
import Header from "../components/crypto/Header";

const Cryptocurrencies = ({ darkMode }) => {
  return (
    <div className="dark:bg-slate-900">
      <Header />
      <br />
      <Widget1 darkMode={darkMode} />
      <br />
    </div>
  );
};

export default Cryptocurrencies;
