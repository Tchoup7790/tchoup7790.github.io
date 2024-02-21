import { motion } from 'framer-motion';
import React from "react";

function Navbar(){
    const [selectedTab, setSelectedTab] = React.useState<string>('home')
    const menuItems = ['home', 'about', 'projects', 'contact']

    return (
        <nav className='navbar'>
            <motion.ul
                className='navbar__list'
                initial={{opacity: 0, y: "100%"}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.7}}
            >
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => setSelectedTab(item)}
                        className={selectedTab === item ? 'navbar__list__item--active' : 'navbar__list__item'}
                    >
                        {item === selectedTab && <motion.div
                            className="navbar__rectangle navbar__rectangle--1"
                            transition={{restSpeed: .7, type: 'spring', bounce: .3 , mass: .5}}
                            layoutId="underline--1"/>}
                        {item === selectedTab && <motion.div
                            className="navbar__rectangle navbar__rectangle--2"
                            transition={{delay: .1,restSpeed: .2, type: 'spring', bounce: .5 , mass: .5}}
                            layoutId="underline--2"/>}
                        {item === selectedTab && <motion.div
                            className="navbar__rectangle navbar__rectangle--3"
                            transition={{delay: .2, restSpeed: .5, type: 'spring', bounce: .7 , mass: .5}}
                            layoutId="underline--3"/>}
                        <a href="#">{item}</a>
                    </li>
                ))}
            </motion.ul>
        </nav>
    );
}

export default Navbar;
