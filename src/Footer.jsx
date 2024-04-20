import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => (
  <footer className='Footer'>
    <div className="footer-container">
      <Link to="/projets">Projets</Link>
      <Link to="/about">À propos</Link>
      <Link>Email</Link>
    </div>
  </footer>
);

export default Footer;