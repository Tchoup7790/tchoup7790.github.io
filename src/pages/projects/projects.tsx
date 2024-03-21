import { motion } from 'framer-motion';

/**
 * Import Components
 */
import ProjectsCard from './card/ProjectsCard';
import ProjectsText from '../../utils/ProjectsText';

/**
 * Image import
 */
import portfolioImg from '../../assets/img/portfolio.png';
import puissanceQuatreImg from '../../assets/img/puissance4.png';
import troisMoustiquairesImg from '../../assets/img/3moustiquaire.png';
import pikominoImg from '../../assets/img/pikomino.png';
import particlesImg from '../../assets/img/particles.png';


/**
 * Projects
 * 
 * @returns { TSX.Element }
 */
function Projects() {
    return (
        <main className="page projects">
            <motion.h1
                className="projects__title"
                initial={{opacity: 0, y: "50%"}}
                whileInView={{opacity: 1, y: 0}}
                transition= {{type: "spring", bounce: .3, duration: 1.5}}
            >Projects</motion.h1>
            {/* <ProjectsCard/> */}
            <div className="projects__content">
                <ProjectsCard img={portfolioImg} title='Portfolio' text={ProjectsText.portfolio} link='https://tchoup7790.github.io/' left={false}/>

                <ProjectsCard img={puissanceQuatreImg} title='Puissance Quatre' text={ProjectsText.puissanceQuatre} link="https://github.com/Tchoup7790/SAE-puissanceQuatre" left={true}/>

                <ProjectsCard img={troisMoustiquairesImg} title='Les 3 Moustiquaires' text={ProjectsText.troisMoustiquaires} link="https://github.com/Tchoup7790/SAE-3Moustiquaire" left={false}/>
                
                <ProjectsCard img={pikominoImg} title='Pikomino' text={ProjectsText.pikomino} link="https://github.com/Tchoup7790/SAE-Pickomino" left={true}/>

                <ProjectsCard img={particlesImg} title='Particles Projects' text={ProjectsText.particles} link="https://github.com/Tchoup7790/SAE-Particules" left={false}/>
            </div>
        </main>
    )
}

export default Projects
