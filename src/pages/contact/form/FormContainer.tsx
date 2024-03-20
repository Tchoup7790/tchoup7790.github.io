import {motion} from "framer-motion";
import React, {useRef, useState} from "react";
import SendButton from "../../../components/button/SendButton.tsx";
import SpinningLoader from "../../../components/loader/spinningLoader.tsx";
import emailjs from '@emailjs/browser';

function FormContainer() {
    /**
     * Form reference
     */
    const form : React.MutableRefObject<HTMLFormElement | null> = useRef(null)

    /**
     * Sending state
     */
    const [isSending, setIsSending] = useState<string>("void");


    /**
     * Handle form submission and sending
     * @param e React.FormEvent<HTMLFormElement>
     */
    const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!form.current) return
        
        document.querySelector('.button--send')!.setAttribute('class', 'button--send--active button--active button')
    
        await new Promise(r => setTimeout(r, 2000))
    
        /**
         * Set the sending state for loading animation
         */
        setIsSending("waiting")
    
        await new Promise(r => setTimeout(r, 2000))
    
        await emailjs
            .sendForm('service_gy1mene', 'template_tbwtiu8', form.current, {publicKey: 'LonPLjMkedDLllUsD'})
            .then(
                () => {setIsSending("sent")},
                (error) => {
                    setIsSending("notSent")
                    console.log('FAILED...', error)
                },
            );
    
        form.current.reset()
    };
    

    /**
     * Form component for contact page
     */
    return (
        <form className="form" ref={form} onSubmit={handleFormSubmission}>

            {/**
             * Send button handling and animation
             */}
            {isSending == "void" && <SendButton/>}
            {isSending == "waiting" && <SpinningLoader/>}

            {isSending == "sent" &&
                <p className="form__validation">
                    <motion.span
                        initial={{opacity: 0, y: "100%"}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: .7, delay: .4}}
                    >Sent</motion.span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                              d="M22 10.5V15.5C22 19 20 20.5 17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H14"
                              strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={{pathLength: 0, opacity: 0}}
                              animate={{pathLength: 1, opacity: 1}}
                              transition={{duration: 1.2, delay: .5}}/>
                        <motion.path
                              d="M7 9L10.13 11.5C11.16 12.32 12.85 12.32 13.88 11.5L15.06 10.56"
                              strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"
                              initial={{pathLength: 0, opacity: 0}}
                              animate={{pathLength: 1, opacity: 1}}
                              transition={{duration: .6, delay: 1.7}}/>
                        <motion.path
                              d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z"
                              strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={{pathLength: 0, opacity: 0}}
                              animate={{pathLength: 1, opacity: 1}}
                              transition={{duration: .6, delay: 1.7}}/>
                    </svg>
                </p>
            }

            {isSending == "notSent" &&
                <p className="form__validation" style={{flexDirection:"column"}}>
                    <motion.span
                        initial={{opacity: 0, y: "100%"}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: .7, delay: .4, ease: "easeInOut"}}
                    >
                        Sorry, Something goes wrong
                    </motion.span>

                    <motion.span
                        style={{fontSize: ".8rem"}}
                        initial={{opacity: 0, y: "100%"}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: .7, delay: .6}}
                    >
                        Please, Retry later
                    </motion.span>
                </p>
            }
        </form>
    );
}

export default FormContainer