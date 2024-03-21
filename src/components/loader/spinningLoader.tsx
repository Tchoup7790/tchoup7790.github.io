import {motion} from "framer-motion";

/**
 * SpinningLoader
 * 
 * @returns { TSX.Element }
 */
function SpinningLoader() {
    return (
        <motion.div
            className="loader"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .7}}
        >
            <div className="loader--G1">
                <motion.span
                    className="loader__dot loader__dot--first"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: .1}}
                />
                <motion.span
                    className="loader__dot loader__dot--fifth"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: 1.3}}
                />
            </div>
            <div className="loader--G2">
                <motion.span
                    className="loader__dot loader__dot--second"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: .4}}
                />
                <motion.span
                    className="loader__dot loader__dot--sixth"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: 1.6}}
                />
            </div>
            <div className="loader--G3">
                <motion.span
                    className="loader__dot loader__dot--third"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: .7}}
                />
                <motion.span
                    className="loader__dot loader__dot--seventh"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: 1.9}}
                />
            </div>
            <div className="loader--G4">
                <motion.span
                    className="loader__dot loader__dot--fourth"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: 1}}
                />
                <motion.span
                    className="loader__dot loader__dot--eighth"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: 2.2}}
                />
            </div>
        </motion.div>
    )
}

export default SpinningLoader