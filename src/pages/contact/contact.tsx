import { motion } from 'framer-motion';
import FormContainer from "./form/FormContainer.tsx";

function Contact() {
    /**
     * Contact Page
     */
    return (
        <main className="page contact">
            <motion.h1
                className="contact__title"
                initial={{opacity: 0, y: "100%"}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: .7}}
            >Contact Me</motion.h1>
            <FormContainer/>
        </main>
    );
}

export default Contact
