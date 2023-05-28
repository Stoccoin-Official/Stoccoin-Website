import Header from "../components/Header";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import ContactForm from "../components/ContactForm";
import Features from "../components/Features";
import Accordion from "../components/Accordion";
import Pricing from "../components/Pricing";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Stats />
      <Features />
      <Pricing />
      <Accordion />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Homepage;
