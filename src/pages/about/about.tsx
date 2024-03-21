import {motion} from "framer-motion";

/**
 * import the Image
*/
import me from "../../assets/img/me.png";

/**
 * import the components
*/
import Button from "../../components/button/Button";
import AboutTextContent from "./AboutTextContent";

/**
 * About
 * 
 * @returns { TSX.Element }
 */
function About() {
    /**
     * @const onButtonClick - Function for Button components
     */
    const onButtonClick = () => {() => window.open("/docs/CV.pdf", "_blank")}
    return (
        <main className="about page">
            <motion.h1
                className="about__title"
                initial={{opacity: 0, y: "50%"}}
                animate={{opacity: 1, y: 0}}
                transition= {{type: "spring", bounce: .3, duration: 1.5}}
            >About
            </motion.h1>
            <div className="about__content">
                <motion.img
                    className="about__content__img"
                    src={me} alt="Me"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: .4}}
                />
                <div className="about__content__text">
                    <AboutTextContent/>
                    <Button text="Here my Resume" onButtonClick={onButtonClick}/>
                </div>
            </div>
        </main>
)
}

export default About
