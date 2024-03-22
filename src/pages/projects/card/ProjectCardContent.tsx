import { motion } from "framer-motion";

/**
 * Import the component
 */
import CardContentProps from "../../../utils/CardContentProps";

/**
 * Render the ProjectsCardContent for Projects page
 * 
 * @function ProjectsCardContent
 * @content
 * @param {CardContentProps} props - The props containing the title and text for the card content.
 * @param {boolean} props.title 
 * @param {string} props.text
 * @returns {TSX.Element} The rendered card content
 */
function ProjectsCardContent({title, text}: CardContentProps) {
  return (
    title?
    <motion.h3
        className="projects__content__card__text__title"
        initial={{opacity: 0, y: "50%"}}
        whileInView={{opacity: 1, y: 0}}
        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
    >{text}</motion.h3> :
    <motion.p 
        className="project__content__card__text__p"
        initial={{opacity: 0, y: "50%"}}
        whileInView={{opacity: 1, y: 0}}
        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
    >{text}</motion.p>
  );
}

export default ProjectsCardContent;