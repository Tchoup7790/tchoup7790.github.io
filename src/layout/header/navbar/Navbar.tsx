import {motion} from "framer-motion";

/**
 * Import the HeaderProps
 */
import HeaderProps from "../../../utils/HeaderProps";


/**
 * Navbar
 * 
 * @param {HeaderProps} *
 * @param { string } selectedTab
 * @param { React.Dispatch<string> } setSelectedTab
 * 
 * @returns { TSX.Element }
 */
function Navbar({setSelectedTab, selectedTab}: HeaderProps) {
    /**
     * @const menuItems - List of menu items
     */
    const menuItems = ['home', 'about', 'projects', 'contact']
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