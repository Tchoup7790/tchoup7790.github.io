import { motion } from "framer-motion";

/**
 * Import the footer SVG 
 */
import { footerSvgData } from "../../assets/svg/footerSvg";

// TODO check animation 
// TODO add color changement

/**
 * Renders the footer component.
 * 
 * @function Footer
 * @component
 * @returns { TSX.Element } The JSX element representing the footer.
 */
function Footer(){
    /**
     * @const {Object} footerVariants  - Footer SVG animation
     */
    const footerVariants = {
        "hidden": {
            fillOpacity: 0,
            pathLength: 0
        },
        "visible": {
            fillOpacity: 1,
            pathLength: 1,
            transition: {
                pathLength: { duration: 1.7, delay: .2 },
                fillOpacity: { duration: .7, delay: 1.9 }
            }
        },
    }
    return (
        <footer className='footer'>
            <a href="https://github.com/Tchoup7790" className="footer__link" target="_blank">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className='footer__link__svg'>
                    <motion.path 
                        className='footer__link__svg--primary' clipRule="evenodd" fillRule="evenodd" 
                        d={footerSvgData.git_border}
                        variants={footerVariants}
                        initial={"hidden"}
                        whileInView={"visible"}
                    />
                    <motion.path
                        className='footer__link__svg--bg' fillRule="evenodd" clipRule="evenodd"
                        d={footerSvgData.git_inner}
                        variants={footerVariants}
                        initial={"hidden"}
                        whileInView={"visible"}/>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/baptiste-julio-595823132/" className="footer__link" target="_blank">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className='footer__link__svg'>
                    <motion.path 
                        className='footer__link__svg--primary' fillRule="evenodd" clipRule="evenodd"
                        d={footerSvgData.linkedin_border}
                        variants={footerVariants}
                        initial={"hidden"}
                        whileInView={"visible"}
                    />
                    <motion.path
                        className='footer__link__svg--bg' fillRule="evenodd" clipRule="evenodd"
                        d={footerSvgData.linkedin_inner}
                        variants={footerVariants}    
                        initial={"hidden"}
                        whileInView={"visible"}
                    />
                </svg>
            </a>
        </footer>
    )
}

export default Footer