import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          Maryam
        </Link>
        
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink 
                to="about-section" 
                smooth={true} 
                duration={800} 
                offset={-80}
                spy={true}
              >
                About
              </ScrollLink>
            ) : (
              <Link to="/about">About</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink 
                to="projects-section" 
                smooth={true} 
                duration={800} 
                offset={-80}
                spy={true}
              >
                Projects
              </ScrollLink>
            ) : (
              <Link to="/projects">Projects</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
