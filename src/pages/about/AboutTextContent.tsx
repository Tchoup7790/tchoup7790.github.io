import { motion } from "framer-motion"

/**
 * Renders the text content for the About page.
 * 
 * @function AboutTextContent
 * @component 
 * @returns {TSX.Element} - Text content of the about page
 */
function AboutTextContent (){
    /**
     * @const {string[]} text - For the text content of the about page
     */
    const text = ["Who am I ?", "I am currently a student in the Computer Science University Technology Diploma (BUT) at the IUT of Nantes.","I found myself in web development by chance, after failing a year at university and feeling a bit lost about my future.","Outside of coding, music has been a part of my life since I was 8 years old, and sports, especially Handball, allow me to channel my energy."] 
    return(
        <section>
            <motion.h3
                className="about__content__text__title"
                initial={{opacity: 0, y: "100%"}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: .7, delay: .4}}
            >Who am I ?</motion.h3>
            {
                text.map((text, index) => {
                    return(
                        <motion.p
                            className="about__content__text__p"
                            initial={{opacity: 0, y: "100%"}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: .7, delay: .5 + index * .2}}
                        >{text}</motion.p>
                    )
                })
            }
        </section>
    )
}

export default AboutTextContent