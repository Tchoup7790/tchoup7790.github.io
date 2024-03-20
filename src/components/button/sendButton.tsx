import { motion } from "framer-motion";
import { sendButtonSvgData } from "./sendButtonSvg";

function SendButton() {

    /**
     * Send Button SVG animation
     */
    const buttonVariants = {
        "hidden": {
            opacity: 0,
            pathLength: 0
        },
        "visible": {
            opacity: 0,
            pathLength: 1,
            transition: {duration: 1.2, delay: 1}
        },
    }

    /**
     * Send Button Component for the contact form
     */
    return (
        <motion.button
            type="submit"
            className="button button--send--hover button--send"
            initial={{opacity: 0, y: "100%"}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: .7, delay: .4}}
        > 
            <svg width="36" height="36" className="button--send__svg" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    d={sendButtonSvgData.plane_border}
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    variants={buttonVariants}
                    initial={"hidden"}
                    animate={"visible"}
                />
                <motion.path
                    d={sendButtonSvgData.plane_line}
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    variants={buttonVariants}
                    initial={"hidden"}
                    animate={"visible"}
                />
                <path
                    className="button--send__path"
                    d={sendButtonSvgData.line}
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                />
            </svg>
            <span className="button--send__span">Send</span>
        </motion.button>
    )
}

export default SendButton