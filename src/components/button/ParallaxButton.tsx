import { motion } from "framer-motion";

/**
 * Import the ButtonProps
 */
import ButtonProps from "../../utils/ButtonProps";


/**
 * ParallaxButton
 * 
 * @param {ButtonProps} *
 * @param { () => void } onButtonClick
 * @param { string } text
 * 
 * @returns { TSX.Element }
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