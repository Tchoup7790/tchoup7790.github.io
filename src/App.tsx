import './main.scss'
import React, {useEffect, useState} from "react";
import Home from "./view/home.tsx";
import {motion} from "framer-motion";
import Contact from "./view/contact.tsx";
import Projects from "./view/projects.tsx";
import About from './view/about.tsx';
import LoadingScreen from "./view/loadingScreen.tsx";

function App() {
    /**
     * Dark mode detector
     */
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

    /**
     * Selected tab state
     */
    const [selectedTab, setSelectedTab] = React.useState<string>('home')
    const menuItems = ['home', 'about', 'projects', 'contact']

    /**
     * Title Name SVG and Animation
     */
    const titleName = [
        "m1.17.04h39.65c1.21-.08,2.6-.02,4.16.2,1.56.22,3.12.56,4.68,1.04,1.56.48,3.03,1.06,4.42,1.75,1.39.69,2.56,1.52,3.51,2.47,1.82,1.82,3.19,3.88,4.09,6.18.91,2.3,1.37,4.66,1.37,7.08,0,3.38-.67,6.37-2.02,8.97-1.34,2.6-3.12,4.81-5.33,6.63-2.21,1.82-4.77,3.21-7.67,4.16-2.9.96-5.92,1.43-9.04,1.43l7.67-.13c3.98-.17,7.86.5,11.63,2.02,3.77,1.52,7.21,3.8,10.33,6.84,2.95,2.87,5.16,6.17,6.63,9.9,1.47,3.73,2.21,7.6,2.21,11.59,0,4.52-.91,8.86-2.73,13.03-1.82,4.17-4.27,7.82-7.34,10.94-3.08,3.13-6.65,5.62-10.73,7.49-4.07,1.87-8.41,2.8-13,2.8H12.48c-2.08,0-3.81-.46-5.2-1.37-1.39-.91-2.54-2.01-3.45-3.32-.91-1.3-1.65-2.71-2.21-4.22-.56-1.52-1.1-2.84-1.62-3.96.26.61.58,1.32.98,2.14.39.83.82,1.62,1.3,2.41.48.78.95,1.47,1.43,2.08.48.61.98,1,1.5,1.17.78.26,1.52.39,2.21.39,1.04,0,1.93-.43,2.67-1.3.74-.87,1.15-2.56,1.23-5.07V.56h-5.85C3.64.56,1.82.95,0,1.73L1.17.04Zm44.46,103.74c3.21.09,6.17-.7,8.9-2.34s5.11-3.95,7.15-6.9c2.04-2.95,3.62-6.4,4.75-10.36,1.13-3.95,1.69-8.18,1.69-12.7,0-4.25-.5-8.25-1.5-11.98-1-3.73-2.4-7.01-4.22-9.84-1.82-2.82-4.01-5.04-6.57-6.64-2.56-1.61-5.39-2.45-8.51-2.54h-26.78v53.54c0,1.39-.17,2.74-.52,4.04-.26,1.13-.71,2.22-1.36,3.26s-1.62,1.87-2.93,2.47h29.9ZM20.54.43v39h19.63c1.99,0,3.81-.5,5.46-1.5,1.65-1,3.08-2.38,4.29-4.16,1.21-1.78,2.15-3.88,2.79-6.31.65-2.43.98-5.07.98-7.93,0-2.6-.28-5.05-.85-7.34-.56-2.3-1.39-4.31-2.47-6.04-1.08-1.73-2.4-3.1-3.96-4.1-1.56-1-3.29-1.54-5.2-1.62h-20.67Z",
        "m85.15,85.84L115.18,12.39c-.69-1.82-1.3-3.36-1.82-4.61-.52-1.26-1.04-2.32-1.56-3.19-.52-.87-1.1-1.62-1.75-2.28-.65-.65-1.45-1.28-2.41-1.88h11.83l24.83,60.71c.87.43,1.69.93,2.47,1.5.78.56,1.65,1.19,2.6,1.88-1.39-1.04-2.86-1.6-4.42-1.69l16.77,41.6h-19.37v-1.04h4.94c2.43,0,3.34-.82,2.73-2.47l-13.78-35.23c-1.47,1.04-2.97,2.28-4.48,3.71-1.52,1.43-3.53,3.4-6.05,5.92s-5.74,5.79-9.68,9.81c-3.94,4.03-9.12,9.21-15.54,15.54-.69.7-1.43,1.3-2.21,1.82-.69.52-1.52.97-2.47,1.37-.95.39-1.95.58-2.99.58-1.82,0-3.4-.67-4.75-2.01-1.34-1.34-2.36-2.97-3.06-4.88-.69-1.91-1.04-3.94-1.04-6.11s.39-4.03,1.17-5.59Zm.39,5.07c0,1.65.35,2.95,1.04,3.9.69.96,1.65,1.43,2.86,1.43,1.56,0,3.21-.82,4.94-2.47l17.16-17.16c4.07-4.16,8.54-8.67,13.39-13.52.69-.52,1.52-1.04,2.47-1.56.69-.43,1.58-.82,2.66-1.17,1.08-.35,2.28-.61,3.58-.78l-17.81-45.63c-6.07,14.73-11.05,26.78-14.95,36.14-3.9,9.36-7,16.83-9.3,22.42-2.3,5.59-3.88,9.73-4.74,12.42-.87,2.69-1.3,4.68-1.3,5.98Z",
        "m168.22,2.25l1.3-1.82h44.98c4.33,0,8.36.76,12.09,2.27,3.73,1.52,7,3.62,9.81,6.31,2.82,2.69,5.03,5.87,6.63,9.55,1.6,3.69,2.4,7.69,2.4,12.03s-.82,8.62-2.47,12.87c-1.65,4.25-4.25,8.02-7.8,11.31-3.38,3.29-7.06,5.81-11.05,7.54-3.99,1.73-8.06,2.6-12.22,2.6h-23.01v29.12c-.09,1.91-.39,3.64-.91,5.2-.52,1.3-1.32,2.49-2.41,3.58-1.08,1.08-2.66,1.62-4.74,1.62s-3.81-.46-5.2-1.37c-1.39-.91-2.56-2.01-3.51-3.32-.96-1.3-1.71-2.71-2.28-4.22-.56-1.52-1.1-2.88-1.62-4.09.61,1.13,1.15,2.19,1.62,3.18.48,1,.98,1.87,1.5,2.6.52.74,1.13,1.34,1.82,1.82.69.48,1.56.71,2.6.71.95-.08,1.84-.54,2.67-1.36.82-.82,1.24-2.49,1.24-5V.95h-5.85c-1.99.26-3.86.69-5.59,1.3Zm45.63,62.14c3.21,0,6.15-.84,8.84-2.54,2.69-1.69,5.03-3.99,7.02-6.89,1.99-2.9,3.55-6.31,4.68-10.21,1.12-3.9,1.69-8.06,1.69-12.48s-.5-8.39-1.5-12.16c-1-3.77-2.38-7.04-4.16-9.81-1.78-2.77-3.94-4.98-6.5-6.63-2.56-1.65-5.4-2.47-8.51-2.47h-26.52v63.18h24.96Z",
        "m329.42.43l-11.7,9.1-.91-.39c1.21-.95,2.32-1.88,3.31-2.79,1-.91,1.69-1.71,2.08-2.41.39-.69.39-1.25,0-1.69-.39-.43-1.45-.65-3.19-.65h-23.92v102.83h-17.16l.52-.91h3.9c1.47,0,2.45-.54,2.92-1.62.47-1.08.71-2.62.71-4.61V1.6h-23.66c-1.56,0-2.56.2-2.99.58-.43.39-.46.93-.06,1.62.39.69,1.06,1.5,2.02,2.41.95.91,2.04,1.88,3.25,2.92l-.91.39L251.94.43h77.48Z",
        "m319.67,103.65h3.9c1.47,0,2.47-.56,2.99-1.69.52-1.12.78-2.69.78-4.68l-.13-91.26c-.09-1.91-.48-3.77-1.17-5.59l10.4,7.93v96.07h-17.42l.65-.78Z",
        "m353.21,10.44c3.9-3.9,8.58-6.54,14.04-7.93,5.46-1.39,11.22-2.08,17.29-2.08,4.68,0,9.38.28,14.1.85,4.72.56,9.17,1.19,13.33,1.88l-6.5,24.18c.43-4.94.15-9.1-.85-12.48-1-3.38-2.71-6.09-5.13-8.12-2.43-2.04-5.5-3.49-9.23-4.35-3.73-.87-8.06-1.26-13-1.17-3.38.09-6.46,1-9.23,2.73-2.77,1.73-5.18,4.1-7.21,7.09-2.04,2.99-3.66,6.46-4.88,10.4-1.21,3.94-1.91,8.21-2.08,12.8,5.89-1.73,11.7-2.6,17.42-2.6,3.99,0,7.82.48,11.51,1.43,3.68.95,7.09,2.34,10.21,4.16s5.91,4.05,8.38,6.69c2.47,2.65,4.53,5.61,6.18,8.91,1.47,2.86,2.58,5.83,3.31,8.9.73,3.08,1.11,5.92,1.11,8.52,0,4.51-.83,8.86-2.47,13.06-1.65,4.2-4.12,7.95-7.41,11.25-3.9,3.9-8.58,6.52-14.04,7.87-5.46,1.34-11.22,2.01-17.29,2.01-4.77,0-9.51-.28-14.23-.84-4.72-.56-9.17-1.19-13.33-1.88l6.5-24.05c-.43,4.94-.15,9.08.85,12.41,1,3.34,2.69,6.02,5.07,8.06,2.38,2.04,5.42,3.47,9.1,4.29,3.68.82,8,1.19,12.94,1.1,3.38-.08,6.46-.97,9.23-2.67,2.77-1.69,5.2-4.01,7.28-6.96,2.08-2.95,3.72-6.41,4.94-10.4,1.21-3.98,1.95-8.23,2.21-12.74.08-1.3.06-2.93-.06-4.88-.13-1.95-.28-3.49-.46-4.62-.52-4.07-1.5-7.86-2.93-11.38-1.43-3.51-3.19-6.54-5.27-9.1-2.08-2.56-4.46-4.55-7.15-5.98-2.69-1.43-5.59-2.14-8.71-2.14-2.69,0-5.42.54-8.19,1.62-2.78,1.08-5.46,2.53-8.06,4.35-2.6,1.82-5.03,3.88-7.28,6.17-2.26,2.3-4.12,4.7-5.59,7.21-.35-.6-.67-1.19-.98-1.75-.3-.56-.54-1.15-.71-1.75-1.13-3.38-1.86-6.8-2.21-10.27-.35-3.47-.22-6.85.39-10.14.61-3.29,1.65-6.46,3.12-9.49,1.47-3.03,3.46-5.76,5.98-8.19Z",
        "m495.95.43l-11.7,9.1-.91-.39c1.21-.95,2.32-1.88,3.31-2.79,1-.91,1.69-1.71,2.08-2.41.39-.69.39-1.25,0-1.69-.39-.43-1.45-.65-3.19-.65h-23.92v102.83h-17.16l.52-.91h3.9c1.47,0,2.45-.54,2.93-1.62.47-1.08.71-2.62.71-4.61V1.6h-23.66c-1.56,0-2.56.2-2.99.58-.43.39-.46.93-.06,1.62.39.69,1.06,1.5,2.02,2.41.95.91,2.04,1.88,3.25,2.92l-.91.39-11.7-9.1h77.48Z",
        "m485.55,91.56c.95,2.25,1.99,4.22,3.12,5.92,1.12,1.69,2.64,2.54,4.55,2.54.95,0,1.8-.48,2.54-1.43.73-.95,1.11-2.68,1.11-5.2v-4.1c0-2.47.02-5.67.06-9.62.04-3.94.06-8.38.06-13.32v-30.81c0-5.11-.02-9.79-.06-14.04-.04-4.25-.06-7.87-.06-10.85v-5.92c-.44-.09-.83-.15-1.17-.19-.35-.04-.7-.07-1.04-.07-1.3,0-2.58.24-3.83.72-1.26.48-2.49,1.32-3.71,2.53,1.64-1.65,3.31-2.97,5-3.96,1.69-1,3.27-1.71,4.75-2.15h-5.2c-.78,0-1.58.11-2.4.33-.82.22-1.62.41-2.41.58l5.72-2.08h70.98l-11.7,9.23-.65-.39,4.29-3.64c.09-.17.21-.35.39-.52.17-.17.26-.3.26-.39.52-1.04.37-1.82-.46-2.34-.82-.52-1.62-.78-2.4-.78h-45.63c2.08.78,4.33,2.19,6.76,4.23,2.43,2.04,5.11,4.55,8.06,7.54,2.95,2.99,6.2,6.35,9.75,10.07,3.55,3.73,7.49,7.63,11.83,11.7,1.9,1.82,3.55,2.73,4.94,2.73.87,0,1.54-.3,2.02-.91.47-.6.93-1.3,1.37-2.08.52-1.04.63-2.38.32-4.03-.3-1.65-.58-2.99-.85-4.03,0-.17.09-.33.26-.46.17-.13.39-.11.65.06.26.43.61,1.32,1.04,2.67.43,1.34.65,2.88.65,4.61-.09,3.29-.89,6.13-2.41,8.52-1.52,2.38-3.62,3.58-6.3,3.58-1.04,0-2.04-.2-2.99-.58-.96-.39-1.78-.85-2.47-1.37-.87-.52-1.69-1.12-2.47-1.82-3.21-3.29-6.65-6.78-10.34-10.47-3.68-3.68-7.08-7.1-10.21-10.27-3.12-3.16-5.72-5.79-7.8-7.87s-3.16-3.12-3.25-3.12v83.72c0,1.21-.13,2.38-.39,3.51-.26.95-.65,1.95-1.17,2.99-.52,1.04-1.26,1.91-2.21,2.6h50.83c1.04,0,1.88-.35,2.54-1.04.65-.69.76-1.52.32-2.47-.09-.17-.22-.37-.39-.59-.17-.21-.41-.5-.71-.84-.3-.34-.76-.8-1.37-1.36-.61-.56-1.43-1.37-2.47-2.41l.65-.65,11.7,10.66h-65.65c-1.82,0-3.38-.39-4.68-1.17-1.3-.78-2.4-1.8-3.31-3.06-.91-1.25-1.71-2.64-2.41-4.16-.69-1.52-1.34-3.01-1.95-4.49Z"
    ]
    const titleVariants = {
        "hidden": {
            fillOpacity: 0,
            pathLength: 0
        },
        "visible": {
            fillOpacity: 1,
            pathLength: 1,
            transition: {
                pathLength: { duration: 1.7, delay: 1.2 },
                fillOpacity: { duration: .7, delay: 1.7 }
            }
        },
    }


  return (
    <>
        <LoadingScreen/>
        <header className='head'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 563.55 104.43"
                className='head__title'
                onClick={() => setSelectedTab("home")}
            >{titleName.map((path, index) => (
                <motion.path
                    key={index}
                    d={path}
                    variants={titleVariants}
                    initial={"hidden"}
                    animate={"visible"}
                />
            ))}
            </svg>


            <nav className='navbar'>
                <motion.ul
                    className='navbar__list'
                    animate={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: "100%"}}
                    transition={{duration: 0.7}}
                >
                    {menuItems.map((item, index) => (
                        <li
                            /**
                            * Set the selected tab
                            */
                            key={index}
                            onClick={() => setSelectedTab(item)}
                            className={selectedTab === item ? 'navbar__list__item navbar__list__item--active' : 'navbar__list__item'}
                        >
                            <a>{item}</a>
                        </li>
                    ))}
                </motion.ul>
            </nav>
        </header>

        {/**
         * Main content
         */}
        {selectedTab === 'home' && <Home></Home>}
        {selectedTab === 'about' && <About></About>}
        {selectedTab === 'projects' && <Projects></Projects>}
        {selectedTab === 'contact' && <Contact></Contact>}
    </>
  )
}

export default App
