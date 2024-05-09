import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Testimonials from './components/Testimonials'
import Home from './components/Home'
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Plans from './components/Plans'
import Footer from './components/Footer';
import JoinUs from './components/JoinUs';







function App() {
  return (
    <Router>
    <div className="App">

      <Header/>
      <Home/>
      <Services/>
      <WhyUs/>
      <Plans/>
     <Testimonials/>
     <JoinUs/>
     <Footer/>

    </div>
    </Router>
  );
}
export default App;
