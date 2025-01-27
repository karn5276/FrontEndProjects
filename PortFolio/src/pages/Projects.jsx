import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
// import {project1} from "../assets/project1";
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';


const Projects = () => (
  <section className="bg-white py-20" id="projects">
    <motion.h2
      className="text-5xl font-extrabold text-gray-800 bg-clip-text bg-gradient-to-r text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
    >
      Featured Projects
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
      <ProjectCard 
        title="BookMyTurf" 
        description="A platform where turf owners can list their turf, and users can book them for events or sports activities."
        stack="ReactJS,TailwindCSS,NodeJs,ExpressJs,MongoDB"
        image={project1}
        link="https://github.com/karn5276/MERNstack"
      />
      <ProjectCard 
        title="Airbnb Clone" 
        description="A full-stack platform that allows users to find, book, and list vacation rentals or properties for short-term stays."
        stack="ReactJS, Node.js,ExpressJs, MongoDB"
        image={project2}
        link="https://github.com/karn5276/ListingRent"
      />
      <ProjectCard 
        title="Employee Management System"
        description="A platform where admins can manage, track, and oversee employee details, roles, and performance."
        stack="ReactJS,Nodejs,ExpressJs,MySql"
        image={project3}
        link="https://github.com/karn5276/Backend_Projects"
      />
    </div>
  </section>
);

export default Projects;
