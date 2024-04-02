import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Title from './components/Title';
import Contact from './components/Contact';
import Subjects from './components/Subjects';
import Classes from './components/Class';
import Features from './components/features';
import About from './components/About';
import OurInstitute from './components/OurInstitute';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    {/* <About/> */}
    <OurInstitute/>
    <Features/>
    <Classes/>
    <Subjects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
