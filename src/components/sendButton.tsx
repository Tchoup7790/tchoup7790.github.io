import {motion} from "framer-motion";

function SendButton() {
    /**
     * The SendButton component is a button that will be used in the SendForm component.
     */
    return (
        <motion.button
            type="submit"
            className="button button--send--hover button--send"
            initial={{opacity: 0, y: "100%"}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: .7, delay: .4}}
        >
            <svg
                width="36"
                height="36"
                className="button--send__svg"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M21.1362 11.4935L28.1598 15.0053C31.3117 16.5812 31.3055 19.1561 28.1598 20.7383L21.1362 24.2501C16.4146 26.614 14.4788 24.6782 16.8427 19.9565L17.8851 17.8718L16.8427 15.7871C14.4788 11.0654 16.4084 9.13577 21.1362 11.4935Z"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    initial={{pathLength: 0, opacity: 0}}
                    animate={{pathLength: 1, opacity: 1}}
                    transition={{duration: 1.2, delay: 1}}
                />
                <motion.path
                    d="M18.2697 17.7229L22.7184 17.7167"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{pathLength: 0, opacity: 0}}
                    animate={{pathLength: 1, opacity: 1}}
                    transition={{duration: .6, delay: 2.2}}
                />
                <path
                    className="button--send__path"
                    d="M1.27208 17.7279H13.1308"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className="button--send__span">Send</span>
        </motion.button>
    )
}

export default SendButton