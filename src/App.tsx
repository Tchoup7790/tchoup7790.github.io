import './style.scss'
import React, {useEffect, useState} from "react";
import Home from "./pages/home/home.tsx";
import Contact from "./pages/contact/contact.tsx";
import Projects from "./pages/projects/projects.tsx";
import About from './pages/about/about.tsx';
import Header from "./layout/header/Header.tsx";
import Footer from "./layout/footer/Footer.tsx";

/* TODO add langage API */
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


  return (
    <>
        <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        {/**
         * Main content
         */}
        {selectedTab === 'home' && <Home></Home>}
        {selectedTab === 'about' && <About></About>}
        {selectedTab === 'projects' && <Projects></Projects>}
        {selectedTab === 'contact' && <Contact></Contact>}

        <Footer/>
    </>
)
}

export default App
