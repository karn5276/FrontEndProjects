import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, stack, link }) => (
  <motion.div
    className="bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:translate-y-3"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
  >
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-cover transform transition-all hover:scale-110 hover:rotate-2" />
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.5 }}
      />
    </div>
    <div className="p-6">
      <motion.h3
        className="text-2xl font-semibold text-gray-800 mb-4 hover:text-teal-500 transition duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {title}
      </motion.h3>
      <p className="text-gray-700 mb-4 text-lg">{description}</p>
      <p className="text-sm text-teal-600 font-medium mb-4">{stack}</p>
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold hover:text-blue-700 transition duration-300 transform hover:translate-x-2"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        View Project
      </motion.a>
    </div>
  </motion.div>
);

export default ProjectCard;
