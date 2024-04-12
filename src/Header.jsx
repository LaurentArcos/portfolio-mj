import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Monportfolio</Link>
      <Link to="/projets">Projets</Link>
      <Link to="/about">A propos</Link>
      <Link to="/email">Email</Link>
    </nav>
  </header>
);

export default Header;