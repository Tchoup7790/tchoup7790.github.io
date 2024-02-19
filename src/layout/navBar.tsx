import { motion } from 'framer-motion';
import React from "react";

function Navbar(){
    const [selectedTab, setSelectedTab] = React.useState<string>('home')

    return (
        <nav className='navbar'>
            <motion.ul
                className='navbar__list'
                initial={{opacity: 0, y: "100%"}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.7}}
            >
                <li
                    onClick={() => setSelectedTab("home")}
                    className={selectedTab === 'home' ? 'navbar__list--item-active' : 'navbar__list__item-basic'}
                >
                    <a href="#">Home</a>
                    {'home' === selectedTab && <motion.div className="navbar__underline" layoutId="underline"/>}
                </li>
                <li
                    onClick={() => setSelectedTab("about")}
                    className={selectedTab === 'about' ? 'navbar__list--item-active' : 'navbar__list__item-basic'}
                >
                    <a href="#">About</a>
                    {'about' === selectedTab && <motion.div className="navbar__underline" layoutId="underline"/>}
                </li>
            </motion.ul>
            <h3 className='navbar__title'>
                {
                    'Baptiste'.split('').map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{opacity: 0, y: "100%"}}
                            animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.7}}
                    >
                        {letter}
                    </motion.span>
                    ))
                }
            </h3>
            <motion.ul
                className='navbar__list'
                initial={{opacity: 0, y: "100%"}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.7}}
            >
                <li
                    onClick={() => setSelectedTab("projects")}
                    className={selectedTab === 'projects' ? 'navbar__list--item-active' : 'navbar__list__item-basic'}
                >
                    {'projects' === selectedTab && <motion.div className="navbar__underline" layoutId="underline"/>}
                    <a href="#">Projects</a>
                </li>
                <li
                    onClick={() => setSelectedTab("contact")}
                    className={selectedTab === 'contact' ? 'navbar__list--item-active' : 'navbar__list__item-basic'}
                >
                    {'contact' === selectedTab && <motion.div className="navbar__underline" layoutId="underline"/>}
                    <a href="#">Contact</a>
                </li>
            </motion.ul>
        </nav>
    );
}

export default Navbar;
