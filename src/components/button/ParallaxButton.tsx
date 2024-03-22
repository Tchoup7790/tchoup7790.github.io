import { motion } from "framer-motion";

/**
 * Import the ButtonProps
 */
import ButtonProps from "../../utils/ButtonProps";

/**
 * Renders a button component with parallax effect.
 *
 * @function ParallaxButton
 * @component
 * @param {ButtonProps} props - The component props.
 * @param {Function} props.onButtonClick - The callback function to be called when the button is clicked.
 * @param {string} props.text - The text to be displayed on the button.
 * @returns {TSX.Element} The rendered button component.
 */
function ParallaxButton({onButtonClick, text}:ButtonProps){
    return(
        <motion.button
            type="submit"
            className="button"
            initial={{opacity: 0, y: "50%"}}
            whileInView={{opacity: 1, y: 0}}
            transition={{type: "spring", bounce: 0.4, duration: 1.2}}
            onClick={onButtonClick}
        >{text}</motion.button>
    )
}

export default ParallaxButton