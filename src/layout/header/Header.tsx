import {motion} from "framer-motion";
import {baptisteSvgData} from "../../assets/svg/baptisteSvg.ts";
import Navbar from "./navbar/Navbar.tsx";
import HeaderProps from "../../utils/HeaderProps.ts";

function Header({selectedTab, setSelectedTab}: HeaderProps){
    /**
     * Title Name SVG and Animation
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

    /**
     * Header Component for all pages
     */
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