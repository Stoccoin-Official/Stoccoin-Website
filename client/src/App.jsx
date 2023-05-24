import { useState } from 'react'
import './App.css'
import Footer from "./components/common/Footer";
import Stats from "./components/Stats";
import ContactForm from './components/ContactForm';
import Features from './components/Features';
import Accordion from './components/Accordion';
import Pricing from './components/Pricing';
import Navbar from './components/common/Navbar'
import Header from './components/common/Header'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
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
