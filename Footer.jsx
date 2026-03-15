import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p>© {currentYear} Maryam. Crafted with ☕ and code.</p>
    </footer>
  );
}

export default Footer;
