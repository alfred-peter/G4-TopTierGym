import './App.css';
import Header from './components/Header';
import Testimonials from './components/Testimonials'
import Home from './components/Home'
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Plans from './components/Plans'
import Footer from './components/Footer';







function App() {
  return (
    <div className="App">

      <Header/>
      <Home/>
      <Services/>
      <WhyUs/>
      <Plans/>
     <Testimonials/>
     <Footer/>

    </div>
  );
}
export default App;
