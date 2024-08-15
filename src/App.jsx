 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Services from './components/Services';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Contact from './components/contact';
import Testimonials from './components/Testimonials'
import WhyUs from './components/WhyUs'

export default function App() {
  return (
    <Router>
      <div className='max-w-ful overflow-hidden scroll-smooth'>
        <NavBar />
        <Home />
        <About />
        <Services />
        <Schedule />
        <Gallery />
        <Testimonials/>
        <WhyUs />
        <Contact />
      </div>
    </Router>
  )
}
