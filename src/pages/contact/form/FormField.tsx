import { motion } from "framer-motion";

/**
 * Import the FormFieldProps
 */
import FormFieldProps from "../../../utils/FormFieldProps";


/**
 * Renders a form field component.
 *
 * @function FormField
 * @component
 * @param {FormFieldProps} props - The props for the form field component.
 * @param {string} props.name - The name of the form field.
 * @param {string} props.type - The type of the form field.
 * @param {number} props.delay - The delay for the animation of the form field.
 * @returns {TSX.Element} The rendered form field component.
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