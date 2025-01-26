import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image }) => (
  <motion.div
    className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default ProjectCard;