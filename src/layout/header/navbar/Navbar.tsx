import {motion} from "framer-motion";

/**
 * Import the HeaderProps
 */
import HeaderProps from "../../../utils/HeaderProps";

/**
 * Renders the navigation bar component.
 *
 * @function Navbar
 * @component
 * @param {HeaderProps} props - The component props.
 * @param {React.Dispatch<string>} props.setSelectedTab - The function to set the selected tab.
 * @param {string} props.selectedTab - The currently selected tab.
 * @returns {TSX.Element} The rendered navigation bar.
 */
function Navbar({setSelectedTab, selectedTab}: HeaderProps) {
    /**
     * @const {string[]} menuItems - List of menu items
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