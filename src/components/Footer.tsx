
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy py-8 text-white/60 text-center">
      <div className="container mx-auto">
        <p className="mb-2">
          Designed & Built by Ahsas
        </p>
        <p>
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
