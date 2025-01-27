import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const Hero = () => (
  <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white min-h-screen flex flex-col justify-center items-center">
    <motion.h1 
      className="text-5xl font-bold mb-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Welcome to My Portfolio
    </motion.h1>
    <motion.p 
      className="text-xl mb-6 text-center max-w-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      Showcasing my projects, skills, and journey in the world of web development.
    </motion.p>
    <Link to="/projects" className="bg-white text-teal-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">Explore Projects</Link>
  </section>
);

export default Hero;