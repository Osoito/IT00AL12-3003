import React from 'react';

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="nav-content">
        <h3>Menu</h3>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;