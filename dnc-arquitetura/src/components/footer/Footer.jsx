import { Link, NavLink } from "react-router-dom";

// ===== ASSETS
import Logo from '../../assets/dnc-logo.svg';

// ===== STYLES
import './Footer.css'

import BrazilIcon from '../../assets/icon-brazil-flag.svg'
import USAIcon from '../../assets/icon-usa-flag.svg'
import FacebookIcon from '../../assets/facebook-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import TwitterIcon from '../../assets/twitter-icon.svg'
import InstagramIcon from '../../assets/instagram-icon.svg'

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className="d-flex jc-space-between mobile-fd-column">
          <div className="footer-logo-col">
            <Link to="/"><img src={Logo} /></Link>
            <p className="grey-color-1">A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
            <div className="d-flex social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="Ícone do Facebook" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt="Ícone do Twitter" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Ícone do Instagram" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={LinkedinIcon} alt="Ícone do Linkedin" />
              </a>
            </div>
          </div>
          <div className="d-flex mobile-fd-column">
              <div className="footer-col">
                <h3>Pages</h3>
                <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/projects">Projects</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </div>
              <div className="footer-col">
                <h3>Contact</h3>
                <p className="grey-color-1">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                <p className="grey-color-1">suporte@escoladnc.com.br</p>
                <p className="grey-color-1">(19) 99187-4342</p>
              </div>
            </div>
        </div>
        <div className="d-flex jc-space-between footer-copy">
          <p className="grey-color-1">Copyright © DNC - 2024</p>
          <div className="langs-area d-flex">
            <img src={BrazilIcon} alt="Ícone do Brasil" height="29px"/>
            <img src={USAIcon} alt="Ícone dos EUA" height="29px" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;