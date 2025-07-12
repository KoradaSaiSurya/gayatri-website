import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <section className='nav'> 
    <div className='navbar'>
      <div className='school'>
        <li className='logo'>
          <a href="/" style={{ color: "gold" }}> SG </a>
        </li>
        <div>
          <li className='school-name'> <a href="/" style={{ color: "#FFD600"}}> SRI GAYATHRI SCHOOL </a> </li>
          <li className='school-para'> <a href="/"  style ={{ color: "grey"}}> The Future Begins Here </a> </li>
        </div>
      </div>

      {/* Hamburger Icon for mobile */}
      <div className='hamburger' onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`menu ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <li> <Link to='/'> Home </Link> </li>
        <li> <Link to='/about'> About </Link> </li>
        <li> <Link to='/contact'> Contact </Link> </li>
        <li> <Link to='/gallery'> Gallery </Link> </li>
        <li> <Link to='/sports'> Sports </Link> </li>
        <li> <Link to='/faculty'> Faculty </Link> </li>
      </ul>

       <div>
        <span > <Link to='/contact' className='contact-btn'> Contact Us </Link>  </span>
      </div>
    </div>

   

    </section>
  )
}

export default Navbar
