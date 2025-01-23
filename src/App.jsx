import Home from './Pages/Home'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Linkedin from './Pages/linkedin'

function App() {
  return (
    <div className='bg-[#000000] px-6 md:px-28'>
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
