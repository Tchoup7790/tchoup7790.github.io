import { motion } from 'framer-motion';
import {NavbarProps} from "../interface/navBarInterface.ts";

function Navbar(props: NavbarProps) {
    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li className={props.active === 'home' ? 'navbar__list--item-active' : 'navbar__list__item-basic'}><a href="#">Home</a></li>
                <li className={props.active === 'about' ? 'navbar__list--item-active' : 'navbar__list__item-basic'}><a href="#">About</a></li>
            </ul>
            <motion.h3
                className='navbar__title'
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5}}
            >
                Baptiste
            </motion.h3>
            <ul className='navbar__list'>
                <li className={props.active === 'project' ? 'navbar__list--item-active' : 'navbar__list__item-basic'}><a href="#">Projects</a></li>
                <li className={props.active === 'contact' ? 'navbar__list--item-active' : 'navbar__list__item-basic'}><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
