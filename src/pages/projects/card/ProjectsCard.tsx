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
 * Renders a card component for projects.
 *
 * @function ProjectsCard
 * @component
 * @param {CardProps} props - The component props.
 * @param {string} props.img - The image source for the card.
 * @param {string} props.title - The title of the project.
 * @param {string[]} props.text - The text content of the project.
 * @param {string} props.link - The link to the project.
 * @param {boolean} props.left - Determines if the card should be aligned to the left.
 * @returns {TSX.Element} The rendered card component.
 */
function ProjectsCard({img, title, text, link, left}:CardProps) {
    /**
     * @const {Function} onButtonClick - Opens the link in a new tab when the button is clicked.
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