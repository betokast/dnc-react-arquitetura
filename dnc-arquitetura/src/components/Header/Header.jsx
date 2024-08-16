// ===== IMPORTS
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// ===== ASSETS
import Logo from '../../assets/dnc-logo.svg';

// ===== STYLES
import './Header.css'

// ===== COMPONENTS
import Button from "../Button/Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <div className="container">
        <div className="al-center d-flex jc-space-between">
          <Link to="/"><img src={Logo} /></Link>
          <div className="mobile-menu">
            <Button buttonStyle="secondary" onClick={toggleMenu}>
              Menu
            </Button>
          </div>
          <nav className={`${isOpen ? 'open' : ''}`}>
            <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={toggleMenu}>
              X
            </Button>
            <ul className="d-flex">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;