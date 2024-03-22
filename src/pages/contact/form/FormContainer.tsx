import React, {useRef, useState} from "react";
/**
 * Import emailjs - email handler
*/
import emailjs from '@emailjs/browser';

/**
 * Import the components
*/
import SendButton from "../../../components/button/SendButton.tsx";
import SpinningLoader from "../../../components/loader/SpinningLoader.tsx";
import FormField from "./FormField.tsx";
import FormResult from "./FormResult.tsx";


/**
 * Renders a form container component.
 * 
 * @function FormContainer
 * @component
 * @returns { TSX.Element } The form container component
 */
function FormContainer() {
    /**
     * @const {React.MutableRefObject<HTMLFormElement | null>} form - Form reference
     */
    const form :React.MutableRefObject<HTMLFormElement | null> = useRef(null)

    /**
     * @const {isSending, setIsSending} - Sending useState
     */
    const [
        /**
         * @type {string}
         */
        isSending, 
        /**
         * @type {React.Dispatch<string>}
         */
        setIsSending
    ] = useState<string>("void");


    /**
     * Handle form submission and sending
     * @param {React.FormEvent<HTMLFormElement>} e
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
    return (
        <form className="form" ref={form} onSubmit={handleFormSubmission}>

            <FormField type="text" name="name" delay={.4}/>
            
            <FormField type="email" name="email" delay={.6}/>
            
            <FormField type="textarea" name="message" delay={.8}/>
            
            {isSending == "void" && <SendButton/>}
            
            {isSending == "waiting" && <SpinningLoader/>}

            {isSending == "sent" && <FormResult state={true}/>}

            {isSending == "notSent" && <FormResult state={false} />}
        </form>
    );
}

export default FormContainer