import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Team from './Components/Team/Team';
import Pricing from './Components/Pricing/Pricing';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';


function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/about' element={<About />} />
      <Route path='/team' element={<Team />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
   </Router>
  )
}

export default App