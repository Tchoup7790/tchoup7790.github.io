import { motion } from "framer-motion";
import FormFieldProps from "../../../utils/FormFieldProps";

function FormField({name, type}:FormFieldProps) {
    /**
     * The FormField component is a reusable component that renders a form field
     */
    return (
        <section className="form__section">
            <motion.label
                className="form__section__label"
                initial={{opacity: 0, y: "100%"}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: .7}}
            >{name}
            </motion.label>
             {
             (type === "textarea")? 
             <textarea name={name} className="form__section__textarea" required/>:
             <input className="form__section__input" type={type} name={name} required/>
             }
        </section>
    )
}

export default FormField