<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Documentation from "./components/Documentation";
import Signup from "./components/Signup";
=======
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Login from './components/Login';
>>>>>>> fa2807fc0edd87498f2e14a3b2e57be2ddf632aa

function App() {
  return (
    <div>
      <Header />
      <Routes>
<<<<<<< HEAD
        <Route path="/HeroSection" element={<HeroSection />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Documentation" element={<Documentation />} />
        <Route path="/Signup" element={<Signup />} />
=======
        <Route path='/HeroSection' element= {<HeroSection/>} />
        <Route path='/login' element= {<Login/>} />
>>>>>>> fa2807fc0edd87498f2e14a3b2e57be2ddf632aa
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
