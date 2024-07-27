import React , {useState} from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <Link to="/" className="logo">
        <img smooth to ='/#home' src={assets.rhyno_logo} alt="Rhyno Logo" />
      </Link>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link smooth to='/#home'>Home</Link></li>
        <li><Link smooth to='/#products'>Products</Link></li>
        <li><Link to='/compareall'>Compare-All</Link></li>
        <li><Link to='/prebook'>Pre-Book</Link></li>
        <a onClick={() => scrollToSection('about-us')}>About Us</a>
        <li><Link smooth to='/#footer'>Contact Us</Link></li>
        <a onClick={() => scrollToSection('rentals')}>Rentals</a>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
