import { motion } from 'framer-motion';
/* import ProjectsCard from "../components/projectsCard/projectsContent.tsx"; */
function Projects() {
    return (
        <main className="page projects">
            <motion.h1
                className="projects__title"
                initial={{opacity: 0, y: "50%"}}
                whileInView={{opacity: 1, y: 0}}
                transition= {{type: "spring", bounce: 0.4, duration: 1.5}}
            >Projects</motion.h1>
            {/* <ProjectsCard/> */}
        </main>
    )
}

export default Projects
