import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Hero.css';
import About from '../../pages/about/About';

/* eslint-disable react/prop-types */
function Hero() {
  return (
    // eslint-disable-next-line react/prop-types
    <div className='hero d-flex al-center'>
      <div className="hero-text">
        <h1>Let Your Home Be Unique</h1>
        <p>There are many variations of the passages of
        lorem Ipsum fromavailable, majority.</p>
        <Link to={About}>
          <Button buttonStyle="secondary" arrow>Get Started</Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero;