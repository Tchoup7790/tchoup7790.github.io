import { motion } from 'framer-motion';
import Navbar from "./navBar.tsx";

function Head(){
    return (
        <header className='head'>
            <h3 className='head__title'>
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
            </h3>
            <Navbar></Navbar>
        </header>
    );
}

export default Head;
