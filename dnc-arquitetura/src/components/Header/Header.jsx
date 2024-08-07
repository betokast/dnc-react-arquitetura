import { Link, NavLink } from "react-router-dom";

// ===== ASSETS
import Logo from '../../assets/dnc-logo.svg';

// ===== STYLES
import './Header.css'

function Header() {
  return (
    <header>
      <div className="container">
        <div className="al-center d-flex jc-space-between">
          <Link to="/"><img src={Logo} /></Link>
          <nav>
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