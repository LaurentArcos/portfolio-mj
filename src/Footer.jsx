import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <Link to="/projets">Projets</Link>
    <Link to="/about">A propos</Link>
    <Link to="/email">Email</Link>
  </footer>
);

export default Footer;