// src/Header.js
import React from 'react'; // React is often imported, though not always strictly necessary for JSX anymore in newer versions

function Header() {
  return (
    <header>
      <h1>My Awesome React App</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;