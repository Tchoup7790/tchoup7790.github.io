import { motion } from "framer-motion";

/**
 * Import the FormFieldProps
 */
import FormFieldProps from "../../../utils/FormFieldProps";

/**
 * FormField
 * 
 * @param {FormFieldProps} *
 * @param {string} name
 * @param {string} type
 * @param {number} delay
 * 
 * @returns {TSX.Element}
 */
function FormField({name, type, delay}:FormFieldProps) {
    return (
        <section className="form__section">
            <motion.label
                className="form__section__label"
                initial={{opacity: 0, y: "100%"}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: .7, delay: delay }}
            >{name}
            </motion.label>
             {
             (type === "textarea")? 
             <motion.textarea 
             name={name} 
             className="form__section__textarea" 
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             transition={{duration: .7, delay: delay }}
             required
             />:
             <motion.input 
             className="form__section__input" 
             type={type} name={name} 
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             transition={{duration: .7, delay: delay }}
             required/>
             }
        </section>
    )
}

export default FormField