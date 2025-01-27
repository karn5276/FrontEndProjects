import { motion } from "framer-motion";

const Contact = () => (
  <div className="flex flex-col min-h-screen">
    <section className="bg-white text-center py-20 flex-grow">
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>
      <motion.p
        className="text-gray-700 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Feel free to reach out via email or connect with me on social media!
      </motion.p>
      <motion.div
        className="flex justify-center space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <a href="https://www.linkedin.com/in/karn-pable-492842233/" className="text-teal-500 hover:underline">LinkedIn</a>
        <a href="https://github.com/karn5276/" className="text-teal-500 hover:underline">GitHub</a>
        <a href="mailto:karnpable5777@gmail.com" className="text-teal-500 hover:underline">Email</a>
      </motion.div>
      <motion.div
        className="mt-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-left text-gray-600">Name</label>
            <input id="name" type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-left text-gray-600">Email</label>
            <input id="email" type="email" className="w-full border border-gray-300 p-2 rounded" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="message" className="block text-left text-gray-600">Message</label>
            <textarea id="message" rows="4" className="w-full border border-gray-300 p-2 rounded" placeholder="Your Message"></textarea>
          </div>
          <motion.button
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
            whileHover={{ scale: 1.1 }}
          >
            Send
          </motion.button>
        </form>
      </motion.div>
    </section>
  </div>
);

export default Contact;