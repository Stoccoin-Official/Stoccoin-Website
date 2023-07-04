import Widget1 from "../components/crypto/Widget1";
import Widget2 from "../components/crypto/Widget2";
import Widget3 from "../components/crypto/Widget3";
import Header from "../components/crypto/Header";

const Cryptocurrencies = () => {
  return (
    <div>
      <Header />
      <br />
      <Widget1 />
      <br />
      <Widget2 />
      <br/>
      <Widget3 />
      <br/>
    </div>
  );
};

export default Cryptocurrencies;
