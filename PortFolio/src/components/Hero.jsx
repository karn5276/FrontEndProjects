/* src/components/Hero.jsx */
import { motion } from "framer-motion";

const Hero = () => (
  <section className="bg-gray-100 text-center py-20">
    <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
    <p className="text-gray-700 mb-6">Showcasing my work and projects</p>
    <motion.a
      href="#projects"
      className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600"
      whileHover={{ scale: 1.1 }}
    >
      View My Work
    </motion.a>
  </section>
);

export default Hero;