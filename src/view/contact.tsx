import { motion } from 'framer-motion';
import SendForm from "../layout/sendForm.tsx";

function Contact() {
    return (
        <main className="contact">
            <motion.h1
                className="contact__title"
                initial={{opacity: 0, y: "100%"}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: .7}}
            >Contact Me</motion.h1>
            <SendForm/>
        </main>
    );
}

export default Contact
