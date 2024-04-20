import { Link } from 'react-router-dom';
import './About.css';
import AProposImage from '../src/assets/A_propos/a_propos-1.jpg';
import PaysageImage from '../src/assets/A_propos/Paysage-1.jpg';
import Illustration1 from '../src/assets/A_propos/Illustration-1.jpg';
import Illustration2 from '../src/assets/A_propos/Illustration-2.jpg';
import Illustration3 from '../src/assets/A_propos/illustration-3.jpg';

const About = () => {
  return (
    <div className="about">

      <div className='top-section'>
        <div className="left-side">
          <h1>A propos</h1>
          <p>Je suis une rêveuse du sud, où chaque ruelle escarpée et chaque marché animé sont des toiles blanches pour mes idées.</p>
        </div>
        <div className="right-side">
          <img src={AProposImage} alt="À propos" />
        </div>
      </div>

      <p className="central-text">
        Mes idées s'éclosent comme des pépins dans un jardin d'agrumes, chaque concept émergeant avec la vivacité des couleurs et la dynamique des formes. Mon objectif est de capturer l'énergie pétillante des agrumes et de la traduire visuellement dans chaque création.
      </p>

      <div className="paysage-container">
        <img src={PaysageImage} alt="Paysage" />
        <Link to="/projets" className="project-link">Projets</Link>
      </div>
  
      <div className="info-section">
        <p>
          Les paysages pittoresques et le rythme décontracté du sud de la France sont mon terrain de jeu créatif. <br /><br />Chaque coin de ma ville natale devient une toile pour mes idées. <br /><br />Mes projets sont influencés par la richesse de la culture locale, transformant ces influences en interfaces intuitives et expériences engageantes.
        </p>
        <img src={Illustration1} alt="Illustration 1" />
      </div>
    
      <div className="info-section reverse">
        <p>
          Le design d'interface est mon terrain de jeu artistique. J'aime l'équilibre entre esthétisme et fonctionnalité. <br /><br /> Mes interfaces sont conçues pour être épurées et percutantes, créant une expérience utilisateur fluide et immersive. <br /><br /> Chaque pixel est pensé pour évoquer la chaleur du soleil méditerranéen.
        </p>
        <img src={Illustration2} alt="Illustration 2" />
      </div>
  
      <div className="info-section">
        <p>
          Je suis passionnée par l'exploration de nouvelles technologies. <br /><br /> Que ce soit en intégrant la réalité virtuelle pour une visite virtuelle des vignobles locaux ou en utilisant l'intelligence artificielle pour personnaliser les expériences utilisateur, je repousse constamment les frontières du design d'interface pour créer des expériences avant-gardistes.
        </p>
        <img src={Illustration3} alt="Illustration 3" />
      </div>
  
    </div>
  );
};

export default About;
