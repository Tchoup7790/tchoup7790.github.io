import { motion } from "framer-motion";

function FormField() {
    return (
        <section className="form__section">
            <motion.label
                className="form__section__label"
            >
                
            </motion.label>
        </section>
    )
}

/* section className="form__section">
                <motion.label
                    className="form__section__label"
                    initial={{opacity: 0, y: "100%"}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: .7, delay: .1}}
                >Name
                </motion.label>
                <input className="form__section__input" type="text" name="name" required/>
            </section>

            <section className="form__section">
                <motion.label
                    className="form__section__label"
                    initial={{opacity: 0, y: "100%"}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: .7, delay: .2}}
                >Email
                </motion.label>
                <input className="form__section__input" type="email" name="email" required/>
            </section>

            <section className="form__section">
                <motion.label
                    className="form__section__label"
                    initial={{opacity: 0, y: "100%"}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: .7, delay: .3}}
                >Message
                </motion.label>
                <textarea name="message" className="form__section__textarea" required/>
            </section> */