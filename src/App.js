import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Title from './components/Title';
import Contact from './components/Contact';
import Subjects from './components/Subjects';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Subjects/>
    <Contact/>
    <Footer/>
    {/* <Title title={"Contact Us"} /> */}
    </>
  );
}

export default App;
