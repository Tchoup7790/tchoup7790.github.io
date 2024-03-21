import { motion } from "framer-motion";

/**
 * Import FormResultProps
 */
import FormResultProps from "../../../utils/FormResultProps";

/**
 * Import the svg for the validation
 */
import { formResultSvg } from "../../../assets/svg/formResultSvg";

/**
 * FormResult
 * 
 * @param {FormResultProps} *
 * @param {boolean} state  
 * 
 * @returns {TSX.Element}
 */
function FormResult({state}:FormResultProps) {
    return (
        state ? (
            <p className="form__validation">
                <motion.span
                    initial={{opacity: 0, y: "100%"}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: .7, delay: .4}}
                >Sent</motion.span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        d={formResultSvg.border}
                        strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"
                        initial={{pathLength: 0, opacity: 0}}
                        animate={{pathLength: 1, opacity: 1}}
                        transition={{duration: 1.2, delay: .5}}/>
                    <motion.path
                        d={formResultSvg.plaice}
                        strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"
                        initial={{pathLength: 0, opacity: 0}}
                        animate={{pathLength: 1, opacity: 1}}
                        transition={{duration: .6, delay: 1.7}}/>
                    <motion.path
                        d={formResultSvg.round}
                        strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{pathLength: 0, opacity: 0}}
                        animate={{pathLength: 1, opacity: 1}}
                        transition={{duration: .6, delay: 1.7}}/>
                </svg>
            </p>
        ):(
            <p className="form__validation" style={{flexDirection:"column"}}>
                <motion.span
                    initial={{opacity: 0, y: "100%"}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: .7, delay: .4, ease: "easeInOut"}}
                >Sorry, Something goes wrong</motion.span>
                <motion.span
                    style={{fontSize: ".8rem"}}
                    initial={{opacity: 0, y: "100%"}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: .7, delay: .6}}
                >Please, Retry later</motion.span>
            </p>
        )
      );
}

export default FormResult
