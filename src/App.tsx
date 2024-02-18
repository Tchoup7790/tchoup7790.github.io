/* import { motion } from 'framer-motion' */
import './main.scss'
import Navbar from './layout/navBar'

function App() {

    /* const title : string[] = "React App".split('')
    const lorem : string[] = "Odiourna Ridiculuspenatibus Efficiturmattis Donecquis Disinterdum Magniscommodo Fermentumegestas Variusvitae Risushabitasse Inceptosnisl Dictumstnisl Sagittisfinibus Crasegestas Utsed Litoraconubia".split('') */

  return (
    <>
    <Navbar></Navbar>
        {/* <h1 className="home__title">
        {title.map((letter, index) => (
            <motion.span
                key={index}
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                {letter}
            </motion.span>
        ))}
        </h1>
        <p>
            {lorem.map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{opacity:1}}
                    transition={{ duration: .1, delay: index * .025}}
                >
                    {letter}
                </motion.span>
            ))}
        </p> */}
    </>
  )
}

export default App
