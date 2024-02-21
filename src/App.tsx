/* import { motion } from 'framer-motion' */
import './main.scss'
import Head from "./layout/head.tsx";
import {useEffect, useState} from "react";
import Home from "./view/home.tsx";

function App() {

    /* const title : string[] = "React App".split('')
    const lorem : string[] = "Odiourna Ridiculuspenatibus Efficiturmattis Donecquis Disinterdum Magniscommodo Fermentumegestas Variusvitae Risushabitasse Inceptosnisl Dictumstnisl Sagittisfinibus Crasegestas Utsed Litoraconubia".split('') */

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

  return (
    <>
        <Head></Head>
        <Home></Home>
    </>
  )
}

export default App
