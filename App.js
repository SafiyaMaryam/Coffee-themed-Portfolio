import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home page with all sections */}
          <Route path="/" element={
            <>
              <Navbar />
              <div id="hero-section">
                <Hero />
              </div>
              <div id="about-section">
                <About />
              </div>
              <div id="projects-section">
                <Projects />
              </div>
              <div id="contact-section">
                <Contact />
              </div>
              <Footer />
            </>
          } />
          
          {/* Individual pages */}
          <Route path="/about" element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          } />
          
          <Route path="/projects" element={
            <>
              <Navbar />
              <Projects />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
