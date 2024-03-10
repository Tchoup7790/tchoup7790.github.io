/*import { motion } from 'framer-motion';*/
import {motion} from "framer-motion";

function About() {
    return (
        <main className="about page">
            <motion.h1
                className="about__title"
                initial={{opacity: 0, y: "50%"}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: .7}}
            >About
            </motion.h1>
            <div className="about__content">
                <motion.img
                    className="about__content__img"
                    src="/public/img/me.png" alt="Me"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: .4}}
                />
                <div className="about__content__text">
                    <section>
                        <motion.h3
                            className="about__content__text__title"
                            initial={{opacity: 0, y: "100%"}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: .7, delay: .4}}
                        >Who am I ?</motion.h3>
                        <motion.p
                            className="about__content__text__p"
                            initial={{opacity: 0, y: "100%"}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: .7, delay: .5}}
                        >I am currently a student in the Computer Science University Technology Diploma (BUT) at the IUT of Nantes.
                        </motion.p>
                        <motion.p
                            className="about__content__text__p"
                            initial={{opacity: 0, y: "100%"}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: .7, delay: .7}}
                        >I found myself in web development by chance, after failing a year at university and feeling a bit lost about my future.
                        </motion.p>
                        <motion.p
                            className="about__content__text__p"
                            initial={{opacity: 0, y: "100%"}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: .7, delay: .9}}
                        >Outside of coding, music has been a part of my life since I was 8 years old, and sports, especially Handball, allow me to channel my energy.
                        </motion.p>
                    </section>
                    <motion.button
                        type="submit"
                        className="button"
                        initial={{opacity: 0, y: "100%"}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: .7, delay: 1.4}}
                        onClick={() => window.open("/public/docs/CV.pdf", "_blank")}
                    >Here my Resume</motion.button>
                </div>
            </div>
        </main>
)
}

export default About
