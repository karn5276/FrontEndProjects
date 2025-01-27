import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const About = () => (
  <div className="flex flex-col min-h-screen bg-gray-100">
    {/* Hero Section */}
    <section className="text-center py-24 flex-grow bg-white shadow-lg rounded-t-xl">
      <motion.h2
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500 mb-6"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg leading-relaxed px-6 sm:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        I’m a passionate web developer with expertise in modern technologies. My mission is to build intuitive, high-performance applications that provide seamless user experiences. Let's collaborate and create something innovative!
      </motion.p>

      {/* Animated Grid of Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-6 sm:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {/* Education Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-8 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 text-white rounded-3xl shadow-xl transform transition-all"
        >
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <p className="text-lg">
            Bachelor's in Computer Science from Dr. D. Y. Patil Institute Of Engineering Management & Research, Akurdi. Focused on web development, building scalable software, and applying best practices.
          </p>
        </motion.div>

        {/* Hobbies Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white rounded-3xl shadow-xl transform transition-all"
        >
          <h3 className="text-2xl font-semibold mb-4">Hobbies</h3>
          <p className="text-lg">
            Exploring new tech trends, hiking, travelling, and playing cricket to boost creativity and critical thinking.
          </p>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-8 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 text-white rounded-3xl shadow-xl transform transition-all"
        >
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <ul className="text-lg list-disc list-inside">
            <li>ReactJS, JavaScript, Tailwind, HTML5, CSS3</li>
            <li>Node.js, Express, MySql</li>
            <li>Version control (Git, GitHub)</li>
            <li>C++,Sql,Data Structures and Algorithm</li>
          </ul>
        </motion.div>

        
      </motion.div>
    </section>

    {/* Contact Floating Button */}
    <motion.div
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-teal-400 to-blue-500 p-4 rounded-full shadow-2xl cursor-pointer hover:scale-105 transition-all"
      whileHover={{ scale: 1.1 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
    >
      <Link to="/contact" className="text-white text-2xl font-semibold">
        <i className="fas fa-envelope"></i> Contact Me
      </Link>
    </motion.div>

    {/* Footer */}
    <motion.footer
      className="bg-gray-900 text-white py-8 text-center mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <p className="text-sm">
        Built with <span className="font-bold">ReactJS</span> |{" "}
        <a
          href="https://www.linkedin.com/in/karn-pable-492842233/"
          className="text-teal-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </motion.footer>
  </div>
);

export default About;
