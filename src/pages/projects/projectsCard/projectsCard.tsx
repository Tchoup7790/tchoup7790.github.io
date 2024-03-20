import {motion} from "framer-motion";

function ProjectsCard() {
    return (
        <div className="projects__content">
            {/*Portfolio*/}
            <section className="projects__content__card">
                <motion.img
                    initial={{opacity: 0, y: "50%"}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{type: "spring", bounce: 0.2, duration: 1.2}}
                    className="projects__content__card__img" src="/img/portfolio.png" alt="portfolio index"/>
                <div className="projects__content__card__text">
                    <motion.h3
                        className="projects__content__card__text__title"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >Portfolio
                    </motion.h3>
                    <motion.p
                        className="projects__content__card__text__p"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >This is my portfolio and I made it with <span className="projects__content__card__text__p__span">React</span>, <span className="projects__content__card__text__p__span">Typescript</span>, <span className="projects__content__card__text__p__span">Framer Motion</span> and <span className="projects__content__card__text__p__span">SCSS</span>.
                    </motion.p>
                    <motion.p className="project__content__card__text__p"
                              initial={{opacity: 0, y: "50%"}}
                              whileInView={{opacity: 1, y: 0}}
                              transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >I create it alone and I'm very proud of the result because it's my first project with React and
                        I do all the interface.
                    </motion.p>
                    <motion.p
                        className="project__content__card__text__p"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >I will continue to improve it and add new features or animation.
                    </motion.p>
                    <motion.button
                        className="button"
                        onClick={() => window.open("https://github.com/Tchoup7790/porteFolio")}
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >See the code
                    </motion.button>
                </div>
            </section>
            {/*Puissance Quatre*/}
            <section className="projects__content__card projects__content__card--left">
                <motion.img
                    initial={{opacity: 0, y: "50%"}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{type: "spring", bounce: 0.2, duration: 1.2}}
                    className="projects__content__card__img" src="/img/puissance4.png" alt="waiting screen"/>
                <div className="projects__content__card__text">
                    <motion.h3
                        className="projects__content__card__text__title"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >Puissance Quatre
                    </motion.h3>
                    <motion.p
                        className="projects__content__card__text__p"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >Here's the Puissance Quatre project in <span className="projects__content__card__text__p__span">Golang</span> and <span className="projects__content__card__text__p__span">Ebiten</span>.
                    </motion.p>
                    <motion.p className="project__content__card__text__p"
                              initial={{opacity: 0, y: "50%"}}
                              whileInView={{opacity: 1, y: 0}}
                              transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >This project aims to recreate the Puissance 4 game using the Golang programming language.
                    </motion.p>
                    <motion.p
                        className="project__content__card__text__p"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >We had quite a few methods given to us, but the aim was to connect two players on a server.
                    </motion.p>
                    <motion.p
                        className="project__content__card__text__p"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >Two players can play against each other via a dedicated server if you follow the README.
                    </motion.p>
                    <motion.button
                        className="button"
                        onClick={() => window.open("https://github.com/Tchoup7790/SAE-puissanceQuatre")}
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >See the project
                    </motion.button>
                </div>
            </section>
            {/*3 Moustiquaires*/}
            <section className="projects__content__card">
                <motion.img
                    initial={{opacity: 0, y: "50%"}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{type: "spring", bounce: 0.2, duration: 1.2}}
                    className="projects__content__card__img" src="/img/3moustiquaire.png"
                    alt="index of 3 moustiquaire"/>
                <div className="projects__content__card__text">
                    <motion.h3
                        className="projects__content__card__text__title"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >Les 3 Moustiquaires
                    </motion.h3>
                    <motion.p
                        className="projects__content__card__text__p"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >Les 3 Moustiquaires is a group project in which we created a fictitious company and its e-commerce
                        site.
                    </motion.p>
                    <motion.p className="project__content__card__text__p"
                              initial={{opacity: 0, y: "50%"}}
                              whileInView={{opacity: 1, y: 0}}
                              transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >We used <span className="projects__content__card__text__p__span">PHP</span> and <span className="projects__content__card__text__p__span">Laravel</span>.
                    </motion.p>
                    <motion.p
                        className="project__content__card__text__p"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >This project is my biggest web development project to date.
                    </motion.p>
                    <motion.p
                        className="project__content__card__text__p"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >Normally, the site works locally, but there may be some errors as the database belongs to the
                        school.
                    </motion.p>
                    <motion.button
                        className="button"
                        onClick={() => window.open("https://github.com/Tchoup7790/SAE-3Moustiquaire")}
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >See the project
                    </motion.button>
                </div>
            </section>
            {/*Pikomino*/}
            <section className="projects__content__card projects__content__card--left">
                <motion.img
                    initial={{opacity: 0, y: "50%"}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{type: "spring", bounce: 0.2, duration: 1.2}}
                    className="projects__content__card__img" src="/img/pikomino.png"
                    alt="pikomino home page"/>
                <div className="projects__content__card__text">
                    <motion.h3
                        className="projects__content__card__text__title"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >Pikomino
                    </motion.h3>
                    <motion.p
                        className="projects__content__card__text__p"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >Pickomino is a board game played with dice.
                    </motion.p>
                    <motion.p className="project__content__card__text__p"
                              initial={{opacity: 0, y: "50%"}}
                              whileInView={{opacity: 1, y: 0}}
                              transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >As part of our end-of-first-year project, we had to remake the game as an application.
                    </motion.p>
                    <motion.p
                        className="project__content__card__text__p"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >We used <span className="projects__content__card__text__p__span">Kotlin</span>, <span className="projects__content__card__text__p__span">JavaFx</span> and a server for some rules and methods.
                    </motion.p>
                    <motion.p
                        className="project__content__card__text__p"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >Sadly, the server belongs to the school and is no longer available.
                    </motion.p>
                    <motion.button
                        className="button"
                        onClick={() => window.open("https://github.com/Tchoup7790/SAE-Pickomino")}
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >See the project
                    </motion.button>
                </div>
            </section>
            {/*Particles*/}
            <section className="projects__content__card">
                <motion.img
                    initial={{opacity: 0, y: "50%"}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{type: "spring", bounce: 0.2, duration: 1.2}}
                    className="projects__content__card__img" src="/img/particles.png" alt="particles with some options"/>
                <div className="projects__content__card__text">
                    <motion.h3
                        className="projects__content__card__text__title"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >Particles Projects
                    </motion.h3>
                    <motion.p
                        className="projects__content__card__text__p"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >This was my first computer science project. It was a particle generator created
                        using <span className="projects__content__card__text__p__span">Golang</span> and <span
                            className="projects__content__card__text__p__span">Ebiten</span>.
                    </motion.p>
                    <motion.p className="project__content__card__text__p"
                              initial={{opacity: 0, y: "50%"}}
                              whileInView={{opacity: 1, y: 0}}
                              transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >We began the project by outlining its structure and incorporating some initial tips.
                    </motion.p>
                    <motion.p
                        className="project__content__card__text__p"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >Then, we developed the entire application, including options to change the color, speed, or
                        'SpawnType' for particle behavior.
                    </motion.p>
                    <motion.p
                        className="project__content__card__text__p"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >Unfortunately, there's a problem with ebiten that means the project no longer works.
                    </motion.p>
                    <motion.p
                        className="project__content__card__text__p"
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >Thanks to <a href="https://github.com/Mitotow" className="linkInText" target="_blank">Mitoto</a> for the photo
                    </motion.p>
                    <motion.button
                        className="button"
                        onClick={() => window.open("https://github.com/Tchoup7790/SAE-Particules")}
                        initial={{opacity: 0, y: "50%"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 1.2}}
                    >See the project
                    </motion.button>
                </div>
            </section>
        </div>
    )
}

export default ProjectsCard