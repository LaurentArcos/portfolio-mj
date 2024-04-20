import './Projets.css';
import Citron1 from '../src/assets/Projets/Citron-1.jpg';
import Citron2 from '../src/assets/Projets/Citron-2.jpg';
import Citron3 from '../src/assets/Projets/Citron-3.jpg';
import Citron4 from '../src/assets/Projets/Citron-4.jpg';
import Citron5 from '../src/assets/Projets/Citron-5.jpg';
import Citron6 from '../src/assets/Projets/Citron-6.png';
import Citron7 from '../src/assets/Projets/Citron-7.jpg';
import Citron8 from '../src/assets/Projets/Citron-8.jpg';
import Citron9 from '../src/assets/Projets/Citron-9.jpg';
import Citron10 from '../src/assets/Projets/Citron-10.jpg';
import MesIdees1 from '../src/assets/Projets/Mes_idees-1.jpg';
import MesIdees2 from '../src/assets/Projets/Mes_idees-2.jpg';

const Projets = () => {
  return (
    <div className="projets">

      <h1>Mes projets</h1>
      <p className="project-description">
        Mes idées s'éclosent comme des pépins dans un jardin d'agrumes, chaque concept émergeant avec la vivacité des couleurs et la dynamique des formes. Mon objectif est de capturer l'énergie pétillante des agrumes et de la traduire visuellement dans chaque création.
      </p>

      <div className="images-container-1">
        <img src={Citron1} alt="Citron 1" />
        <img src={Citron2} alt="Citron 2" />
      </div>
      <div className="images-container-2">
        <img src={Citron3} alt="Citron 3" />
        <img src={Citron4} alt="Citron 4" />
        <img src={Citron5} alt="Citron 5" />
      </div>

      <div className="split-images">
        <div className="left">
          <img src={Citron6} alt="Citron 6" />
          <img src={Citron9} alt="Citron 9" />
        </div>
        <div className="right">
          <img src={Citron7} alt="Citron 7" />
          <img src={Citron8} alt="Citron 8" />
          <img src={Citron10} alt="Citron 10" />
        </div>
      </div>

      <div className="title-container-projets">
        <span className="title-dot-projets"></span>
        <div className="title-text-idees">Mes idées</div>
      </div>

      <div className="ideas-block">
        <img src={MesIdees1} alt="Mes Idées 1" />
        <p>
          Du packaging aux illustrations, en passant par les logos et les motifs, je m'efforce de faire rayonner la fraîcheur et la vivacité caractéristiques des citrons. <br/><br/> Chaque projet est une invitation à plonger dans un monde où le design graphique devient une célébration des sens, évoquant l'arôme envoûtant des agrumes et la sensation revigorante d'une gorgée de citronnade par une chaude journée d'été.
        </p>
      </div>

      <div className="ideas-block">
        <p>
          À travers mes créations, je souhaite apporter une touche d'optimisme et de vitalité à chaque projet, tout en rappelant que le design graphique peut être aussi rafraîchissant qu'une tranche de citron dans un verre d'eau glacée. <br/><br/><br/> Prêt(e) à explorer ce monde graphique fruité et plein de zest ?
        </p>
        <img src={MesIdees2} alt="Mes Idées 2" />
      </div>
    </div>
  );
}

export default Projets;
