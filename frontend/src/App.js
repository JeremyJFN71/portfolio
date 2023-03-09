import './App.css';

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
