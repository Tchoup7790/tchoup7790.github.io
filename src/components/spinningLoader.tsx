import {motion} from "framer-motion";

function SpinningLoader() {

    return (
        <div className="loader">
            <div className="loader--G1">
                <motion.circle
                    className="loader__dot loader__dot--first"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: .1}}
                />
                <motion.circle
                    className="loader__dot loader__dot--fifth"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: 1.3}}
                />
            </div>
            <div className="loader--G2">
                <motion.circle
                    className="loader__dot loader__dot--second"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: .4}}
                />
                <motion.circle
                    className="loader__dot loader__dot--sixth"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: 1.6}}
                />
            </div>
            <div className="loader--G3">
                <motion.circle
                    className="loader__dot loader__dot--third"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: .7}}
                />
                <motion.circle
                    className="loader__dot loader__dot--seventh"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: 1.9}}
                />
            </div>
            <div className="loader--G4">
                <motion.circle
                    className="loader__dot loader__dot--fourth"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: 1}}
                />
                <motion.circle
                    className="loader__dot loader__dot--eighth"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.7, delay: 2.2}}
                />
            </div>
        </div>
    )
}

export default SpinningLoader