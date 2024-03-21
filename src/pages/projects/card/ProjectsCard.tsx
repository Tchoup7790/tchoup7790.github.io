import {motion} from "framer-motion";

/**
 * Import the components
 */
import ProjectsCardContent from "./ProjectCardContent";
import ParallaxButton from "../../../components/button/ParallaxButton";

/**
 * Import the props 
 */
import CardProps from "../../../utils/CardProps";

/**
 * ProjectsCard
 * 
 * @param {CardProps} *
 * @param {string} img
 * @param {string} title 
 * @param {string} text
 * @param {string} link
 * @param {boolean} left
 * 
 * @returns {TSX.Element}
 */
function ProjectsCard({img, title, text, link, left}:CardProps) {
    /**
     * @const onButtonClick - Open the link in a new tab function for ParallaxButton
     */
    const onButtonClick = () => window.open(link)

    return (
        <section className={left? "projects__content__card projects__content__card--left":"projects__content__card"}>
            <motion.img
                initial={{opacity: 0, y: "50%"}}
                whileInView={{opacity: 1, y: 0}}
                transition={{type: "spring", bounce: 0.2, duration: 1.2}}
                className="projects__content__card__img" src={img} alt="card img"/>
            <div className="projects__content__card__text">
                <ProjectsCardContent title={true} text={title} />
                {
                    text.map(t => <ProjectsCardContent title={false} text={t} />)
                }
                <ParallaxButton onButtonClick={onButtonClick} text="See the code"/>
            </div>
        </section>
    )
}

export default ProjectsCard