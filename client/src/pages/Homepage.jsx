import Header from "../components/Header";
import Stats from "../components/Stats";
import ContactForm from "../components/ContactForm";
import Features from "../components/Features";
import Accordion from "../components/Accordion";
import Pricing from "../components/Pricing";
import Ticker from "../components/Ticker";

const Homepage = ({ props }) => {
  return (
    <div>
      <Header />
      <Ticker />
      <Stats />
      <Features />
      <Pricing />
      <Accordion />
      <ContactForm />
    </div>
  );
};

export default Homepage;
