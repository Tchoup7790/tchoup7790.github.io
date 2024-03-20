import {motion} from "framer-motion";
import HeaderProps from "../../../utils/HeaderProps";

function Navbar({setSelectedTab, selectedTab}: HeaderProps) {
    /**
     * List of menu items
     */
    const menuItems = ['home', 'about', 'projects', 'contact']

    /**
     * Navbar Component for all pages
     */
    return (
        <nav className='navbar'>
            <motion.ul
                className='navbar__list'
                animate={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: "100%"}}
                transition={{duration: 0.7}}>
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => setSelectedTab(item)}
                        className={selectedTab === item ? 'navbar__list__item navbar__list__item--active' : 'navbar__list__item'}
                    >
                        <a>{item}</a>
                    </li>
                ))}
            </motion.ul>
        </nav>
    )
}

export default Navbar