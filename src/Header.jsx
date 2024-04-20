import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className='Header'>
    <nav className='Header-nav1'>
      <div className="first-link">
        <Link to="/">Mon portfolio</Link>
      </div><div className="second-link">    
        <Link to="/projets">Projets</Link>
      </div>
      <div className="third-link">
        <Link to="/about">À propos</Link>
      </div>
      </nav>
      <nav className='Header-nav2'>
      <div className="fourth-link">
        <Link>Email</Link>
      </div>
    </nav>
  </header>
);

export default Header;