import {motion} from "framer-motion";
/*import emailjs from '@emailjs/browser';*/
import React from "react";
import SendButton from "../components/sendButton.tsx";

function SendForm() {

    const [isSending, setIsSending] = React.useState("void");
    const sendEmail = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        document.querySelector('.button--send')!.setAttribute('class', 'button--send--active button--active button');

        const timeout = async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('resolved');
                }, 2000);
            });
        }

        timeout()
            .then(() => {
                setIsSending("waiting");
            });

        const timeoutEnd = async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('resolved');
                }, 10000);
            });
        }

        timeoutEnd()
            .then(() => {
                setIsSending("sent");
                console.log('sendEmailEnd');
            })

        /*
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
        e.currentTarget.reset();*/
    };

    //TODO : Add required fields
    return (
        <form className="form" onSubmit={sendEmail}>
            <section className="form__section">
                <motion.label
                    className="form__section__label"
                    initial={{opacity: 0, y: "100%"}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: .7, delay: .1}}
                >Name
                </motion.label>
                <input className="form__section__input" type="text" name="name"/>
            </section>
            <section className="form__section">
                <motion.label
                    className="form__section__label"
                    initial={{opacity: 0, y: "100%"}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: .7, delay: .2}}
                >Email
                </motion.label>
                <input className="form__section__input" type="email" name="email"/>
            </section>
            <section className="form__section">
                <motion.label
                    className="form__section__label"
                    initial={{opacity: 0, y: "100%"}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: .7, delay: .3}}
                >Message
                </motion.label>
                <textarea name="message" className="form__section__textarea"/>
            </section>
            {isSending == "void" && <SendButton/>}
            {isSending == "waiting" && <motion.p
                className="form__p"
                initial={{opacity: 0, y: "100%"}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: .7}}
            >Waiting</motion.p>}
            {isSending == "sent" && <motion.p
                className="form__p--success form__p"
                initial={{opacity: 0, y: "100%"}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: .7, delay: .4}}
            >Sent</motion.p>}
        </form>
    );
}

export default SendForm