import Header from "../components/Header";
import Stats from "../components/Stats";
import ContactForm from "../components/ContactForm";
import Features from "../components/Features";
import Accordion from "../components/Accordion";
import Pricing from "../components/Pricing";
import Ticker from "../components/Ticker";

const Homepage = ({ darkMode }) => {
  return (
    <div className="dark:bg-slate-900">
      <Header />
      <Ticker darkMode={darkMode} />
      <Stats />
      <Features />
      <Pricing />
      <Accordion />
      <ContactForm />
    </div>
  );
};

export default Homepage;
