import Home from './Pages/Home'
import './App.css'
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Link, Route, Routes } from 'react-router-dom'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Linkedin from './Pages/linkedin'

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,  // Adjust the scroll speed
      smooth: true,   // Enable smooth scrolling
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();  // Cleanup when component unmounts
    };
  }, []);

  return (
    // <div className='bg-[#000000] px-6 md:px-28'>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/linkedin' element={<Linkedin />} />
      </Routes>
    </div>
  )
}

export default App
