import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import Blog from './Blog';
import Services from './Services';
import About from './About';
import Shop from './shop';

function App() {
  return (
    <Router>
      <Navbar />   {/* appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
      <Footer />   {/* appears on all pages */}
    </Router>
  );
}

export default App;