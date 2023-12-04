import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Login from './components/Login';

function App() {
  return (
    
    <div>
      <Header />
      <Routes>
        <Route path='/HeroSection' element= {<HeroSection/>} />
        <Route path='/login' element= {<Login/>} />
      </Routes>
      <Footer/>
    </div>
  
  );
}

export default App;
