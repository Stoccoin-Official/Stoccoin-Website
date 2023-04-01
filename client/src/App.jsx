import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import ContactForm from './components/ContactForm';
import Features from './components/Features';
import Accordion from './components/Accordion';
import Pricing from './components/Pricing';
const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Stats />
      <Features />
      <Pricing />
      <Accordion />
      <ContactForm />
      <Footer />   
    </div>
  )
}

export default App
