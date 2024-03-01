/* import { motion } from 'framer-motion' */
import './main.scss'
import React, {useEffect, useState} from "react";
import Home from "./view/home.tsx";
import {motion} from "framer-motion";
import Contact from "./view/contact.tsx";
import Projects from "./view/projects.tsx";
import About from './view/about.tsx';

function App() {
    // dark and white theme handler
    const useThemeDetector = () => {
        const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
        const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
        const mqListener = ( (e : MediaQueryListEvent)=> {
            setIsDarkTheme(e.matches);
        });

        useEffect(() => {
            const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
            darkThemeMq.addEventListener('change',mqListener);
            return () => darkThemeMq.addEventListener('change', mqListener);
        }, []);
        return isDarkTheme;
    }

    const isDarkTheme = useThemeDetector();

    if (isDarkTheme) {
        document.querySelector("body")!.setAttribute("data-theme", "dark")
    }else{
        document.querySelector("body")!.setAttribute("data-theme", "light")
    }

    // navbar handler
    const [selectedTab, setSelectedTab] = React.useState<string>('home')
    const menuItems = ['home', 'about', 'projects', 'contact']

  return (
    <>
        <header className='head'>
            <motion.h3
                className='head__title'
                whileHover={{opacity: 0.7}}
            >
                {
                    'Baptiste'.split('').map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{opacity: 0, y: "100%"}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1 + 0.7}}
                        >
                            {letter}
                        </motion.span>
                    ))
                }
            </motion.h3>
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
                            className={selectedTab === item ? 'navbar__list__item navbar__list__item--active' : 'navbar__list__item'}
                        >
                            <a href="#">{item}</a>
                        </li>
                    ))}
                </motion.ul>
            </nav>
        </header>
        {selectedTab === 'home' && <Home></Home>}
        {selectedTab === 'about' && <About></About>}
        {selectedTab === 'projects' && <Projects></Projects>}
        {selectedTab === 'contact' && <Contact></Contact>}
    </>
  )
}

export default App
