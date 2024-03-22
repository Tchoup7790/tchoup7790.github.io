import {motion} from "framer-motion";

/**
 * Import the Navbar Component
 */
import Navbar from "./navbar/Navbar.tsx";

/**
 * Import the SVG data for the title
 */
import {baptisteSvgData} from "../../assets/svg/baptisteSvg.ts";

/**
 * Import the HeaderProps
 */
import HeaderProps from "../../utils/HeaderProps.ts";


/**
 * Renders the header component.
 *
 * @function Header
 * @component
 * @param {HeaderProps} props - The component props.
 * @param {string} props.selectedTab - The currently selected tab.
 * @param {React.Dispatch<string>} props.setSelectedTab - The function to set the selected tab.
 * @returns {TSX.Element} The rendered header component.
 */
function Header({selectedTab, setSelectedTab}: HeaderProps){
    /**
     * @const {Object} titleVariants Title Name SVG and Animation
     */
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
        <header className='head'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 563.55 104.43"
                className='head__title'
                onClick={() => setSelectedTab("home")}
            >{baptisteSvgData.map((path, index) => (
                <motion.path
                    key={index}
                    d={path}
                    variants={titleVariants}
                    initial={"hidden"}
                    animate={"visible"}
                />
            ))}
            </svg>
            <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        </header>
    )
}

export default Header