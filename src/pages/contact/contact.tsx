import { motion } from 'framer-motion';

/**
 * Import the component
 */
import FormContainer from "./form/FormContainer.tsx";

/**
 * Contact
 * 
 * @returns { TSX.Element }
 */
function Contact() {
    return (
        <main className="page contact">
            <motion.h1
                className="contact__title"
                initial={{opacity: 0, y: "50%"}}
                animate={{opacity: 1, y: 0}}
                transition= {{type: "spring", bounce: .3, duration: 1.5}}
            >Contact Me</motion.h1>
            <FormContainer/>
        </main>
    );
}

export default Contact
