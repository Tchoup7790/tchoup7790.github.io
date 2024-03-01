/*import { motion } from 'framer-motion';*/
import emailjs from '@emailjs/browser';
import React from "react";
function Contact() {
    const sendEmail = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .sendForm('service_gy1mene', 'template_tbwtiu8', e.currentTarget, {publicKey : 'LonPLjMkedDLllUsD'})
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.currentTarget.reset();
    };


    return (
        <main className="contact">
            <h1 className="contact__title">Contact Me</h1>
            <form className="form" onSubmit={sendEmail}>
                <section className="form__section">
                    <label className="form__section__label">Name</label>
                    <input className="form__section__input" type="text" name="name" required/>
                </section>
                <section className="form__section">
                    <label className="form__section__label">Email</label>
                    <input className="form__section__input" type="email" name="email" required/>
                </section>
                <section className="form__section">
                    <label className="form__section__label">Message</label>
                    <textarea name="message" className="form__section__textarea" required/>
                </section>
                <button type="submit" className="button">Send</button>
            </form>
        </main>
    );
}

export default Contact
