import { useContext } from "react";
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

// ===== CONTEXT
import { AppContext } from "../../contexts/AppContext";

// ===== COMPONENTS
import Button from "../Button/Button";

function Footer() {
  const appContext = useContext(AppContext);
  const changeLanguage = (country) => {
    appContext.setLanguage(country);
  }

  return (
    <footer>
      <div className='container'>
        <div className="d-flex jc-space-between mobile-fd-column">
          <div className="footer-logo-col">
            {/* biome-ignore lint/a11y/useAltText: <explanation> */}
            <Link to="/"><img src={Logo} /></Link>
            <p className="grey-color-1">{appContext.languages[appContext.language].general.footerLogoText}</p>
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
                <h3>{appContext.languages[appContext.language].general.pages}</h3>
                <ul>
                  <li><NavLink to="/">{appContext.languages[appContext.language].menu.home}</NavLink></li>
                  <li><NavLink to="/about">{appContext.languages[appContext.language].menu.about}</NavLink></li>
                  <li><NavLink to="/projects">{appContext.languages[appContext.language].menu.projects}</NavLink></li>
                  <li><NavLink to="/contact">{appContext.languages[appContext.language].menu.contact}</NavLink></li>
                </ul>
              </div>
              <div className="footer-col">
                <h3>{appContext.languages[appContext.language].menu.contact}</h3>
                <p className="grey-color-1">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                <p className="grey-color-1">suporte@escoladnc.com.br</p>
                <p className="grey-color-1">(19) 99187-4342</p>
              </div>
            </div>
        </div>
        <div className="d-flex jc-space-between footer-copy">
          <p className="grey-color-1">Copyright © DNC - 2024</p>
          <div className="langs-area d-flex">
            <Button onClick={() => changeLanguage('br')}>
              <img src={BrazilIcon} alt="Ícone do Brasil" height="29px"/>
            </Button>
            <Button onClick={() => changeLanguage('en')}>
              <img src={USAIcon} alt="Ícone dos EUA" height="29px" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;