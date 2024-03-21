import { motion } from "framer-motion";

/**
 * Import the ButtonProps
 */
import ButtonProps from "../../utils/ButtonProps";

/**
 * Button
 * 
 * @param {ButtonProps} *
 * @param { () => void } onButtonClick
 * @param { string } text
 * 
 * @returns { TSX.Element }
 */
function Button({onButtonClick, text}:ButtonProps){
    return(
        <motion.button
            type="submit"
            className="button"
            initial={{opacity: 0, y: "100%"}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: .7, delay: 1.4}}
            onClick={onButtonClick}
        >{text}</motion.button>
    )
}

export default Button