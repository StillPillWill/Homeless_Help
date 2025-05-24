// src/Footer.js
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year here

  return (
    <footer>
      <p>&copy; {currentYear} My React App. All rights reserved.</p> {/* Use the dynamic year */}
    </footer>
  );
}

export default Footer;