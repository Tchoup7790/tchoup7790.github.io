import React, {useRef, useState} from "react";
import SendButton from "../../../components/button/SendButton.tsx";
import SpinningLoader from "../../../components/loader/spinningLoader.tsx";
import emailjs from '@emailjs/browser';
import FormField from "./FormField.tsx";
import FormResult from "./FormResult.tsx";

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

            <FormField type="text" name="name"/>
            
            <FormField type="email" name="email"/>
            
            <FormField type="textarea" name="message"/>
            
            {isSending == "void" && <SendButton/>}
            
            {isSending == "waiting" && <SpinningLoader/>}

            {isSending == "sent" && <FormResult state={true}/>}

            {isSending == "notSent" && <FormResult state={false} />}
        </form>
    );
}

export default FormContainer