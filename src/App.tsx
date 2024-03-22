import React, {useEffect, useState} from "react";
/**
 * Import the style
 */
import './style.scss'

/**
 * Import the components
 */
import Home from "./pages/home/Home.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Projects from "./pages/projects/Projects.tsx";
import About from './pages/about/About.tsx';
import Header from "./layout/header/Header.tsx";
import Footer from "./layout/footer/Footer.tsx";

/* TODO add langage API */
/**
 * The main component of the application.
 *
 * @function App
 * @returns {TSX.Element} The rendered JSX elements.
 */
function App() {
    /**
     * @const {Function} useThemeDetector - Dark mode detector
     * @return {boolean}
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

    /**
     * @const {boolean} isDarkTheme
     */
    const isDarkTheme = useThemeDetector();

    if (isDarkTheme) {
        document.querySelector("body")!.setAttribute("data-theme", "dark")
    }else{
        document.querySelector("body")!.setAttribute("data-theme", "light")
    }

    /**
     * @const {selectedTab, setSelectedTab} - Selected tab state
     */
    const [
        /**
         * @type {string}
         */
        selectedTab, 
        /**
         * @type {React.Dispatch<string>}
         */
        setSelectedTab
    ] = React.useState<string>('home')


  return (
    <>
        <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        {/**
         * Main content
         */}
        {selectedTab === 'home' && <Home/>}
        {selectedTab === 'about' && <About/>}
        {selectedTab === 'projects' && <Projects/>}
        {selectedTab === 'contact' && <Contact/>}

        <Footer/>
    </>
)
}

export default App
