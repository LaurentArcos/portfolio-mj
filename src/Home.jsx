import './Home.css';
import CitronImage from '../src/assets/Mon_portfolio/Citron-1.jpg';
import ProfileImage from '../src/assets/Mon_portfolio/Moi.png';
import Poster1 from '../src/assets/Mon_portfolio/Poster-1.jpg';
import Poster2 from '../src/assets/Mon_portfolio/Poster-2.jpg';
import Poster3 from '../src/assets/Mon_portfolio/Poster-3.jpg';
import Vinyle1 from '../src/assets/Mon_portfolio/Vinyle-1.jpg';
import Vinyle2 from '../src/assets/Mon_portfolio/Vinyle-2.jpg';
import Vinyle3 from '../src/assets/Mon_portfolio/Vinyle-3.jpg';
import Vinyle4 from '../src/assets/Mon_portfolio/Vinyle-4.jpg';
import Vinyle5 from '../src/assets/Mon_portfolio/Vinyle-5.jpg';
import Vinyle6 from '../src/assets/Mon_portfolio/Vinyle-6.jpg';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <h1>Hello hello...</h1>
    <div className="section-1">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div className="carousel-image">
            <img src={CitronImage} alt="Citron" />
          </div>
          <div className="carousel-indicators">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={index === 0 ? 'dot active' : 'dot'}></span>
            ))}
          </div>
        </div>
        <div className="image-profile">
          <img src={ProfileImage} alt="Profile" />
        </div>
      </div>
    </div>
    <div className="text-section">
      <p>
        Bienvenue dans mon univers !<br /><br />
        Jeune explorateur(trice) passionné(e) de la vie, je navigue à travers les expériences avec curiosité et un soupçon d'aventure. Amateur(trice) de petites joies quotidiennes, je trouve la beauté dans les détails et les instants simples qui colorent la toile de ma vie.
      </p>
      <Link to="/about" className="about-link">À propos</Link>
    </div>
    <div className="about-section">
      <div className="about-block poster">
        <div className="title-container">
          <span className="title-dot"></span>
          <div className="title-text poster-title">About Poster</div>
        </div>
        <div className="images-row">
          <img src={Poster1} alt="Poster 1" />
          <img src={Poster2} alt="Poster 2" />
          <img src={Poster3} alt="Poster 3" />
        </div>
      </div>
      <div className="about-block vinyle">
        <div className="title-container">
          <div className="title-text vinyle-title">About Vinyle</div>
          <span className="title-dot"></span>
        </div>
        <div className="images-grid">
          <img src={Vinyle1} alt="Vinyle 1" />
          <img src={Vinyle2} alt="Vinyle 2" />
          <img src={Vinyle3} alt="Vinyle 3" />
          <img src={Vinyle4} alt="Vinyle 4" />
          <img src={Vinyle5} alt="Vinyle 5" />
          <img src={Vinyle6} alt="Vinyle 6" />
        </div>
      </div>
    </div>
  </div>
);

export default Home;