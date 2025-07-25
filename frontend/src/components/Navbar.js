import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <section className='nav'> 
      <div className='navbar'>
        {/* Left: Logo & Title */}
        <div className='school'>
          <li className='logo'>
            <a href="/" style={{ color: "gold" }}> SG </a>
          </li>
          <div>
            <li className='school-name'>
              <a href="/" style={{ color: "#FFD600" }}> SRI GAYATHRI SCHOOL </a>
            </li>
            <li className='school-para'>
              <a href="/" style={{ color: "grey" }}> The Future Begins Here </a>
            </li>
          </div>
        </div>

        {/* Hamburger for Mobile */}
        <div className='hamburger' onClick={toggleMenu}> ☰ </div>

        {/* Main Menu */}
        <ul className={`menu ${isMobileMenuOpen ? 'menu-open' : ''}`}>
          <li> <Link to='/' onClick={() => setIsMobileMenuOpen(false)}> Home </Link> </li>
          <li> <Link to='/about' onClick={() => setIsMobileMenuOpen(false)}> About </Link> </li>
          <li> <Link to='/contact' onClick={() => setIsMobileMenuOpen(false)}> Contact </Link> </li>
          <li> <Link to='/gallery' onClick={() => setIsMobileMenuOpen(false)}> Gallery </Link> </li>
          <li> <Link to='/sports' onClick={() => setIsMobileMenuOpen(false)}> Sports </Link> </li>
          <li> <Link to='/faculty' onClick={() => setIsMobileMenuOpen(false)}> Faculty </Link> </li>
        </ul>

        {/* Contact Us + Logout */}
        <div>
          <span>
            <Link to='/contact' className='contact-btn'> Contact Us </Link>
          </span>

        </div>
      </div>
    </section>
  );
};

export default Navbar;
