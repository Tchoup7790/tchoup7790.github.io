import {AnimatePresence, motion } from 'framer-motion';
function Home() {

    return (
        <main>
            <section className="page home">
                <h2 className="home__title">
                    <motion.span
                        initial={{opacity: 0, y: "100%"}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.7, delay: 0.1}}
                    >Hi,
                    </motion.span>
                    <motion.span
                        initial={{opacity: 0, y: "100%"}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.7, delay: 0.35}}
                    >I'm <span className="home__title__span home__title__span--first">Baptiste</span>
                    </motion.span>
                    <motion.span
                        initial={{opacity: 0, y: "100%"}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.7, delay: 0.6}}
                    >I'm a <span className="home__title__span--second home__title__span">web developer</span>
                    </motion.span>
                    <motion.span
                        initial={{opacity: 0, y: "100%"}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.7, delay: 0.85}}
                    >Welcome to my <span className="home__title__span home__title__span--first">portfolio</span>
                    </motion.span>
                </h2>
            </section>
        </main>
    )
}

export default Home
