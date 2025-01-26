/* src/components/Navbar.jsx */
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-900 text-white p-4 sticky top-0 flex justify-between items-center">
    <h1 className="text-xl font-bold">My Portfolio</h1>
    <ul className="flex space-x-4">
      <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
      <li><Link to="/about" className="hover:text-teal-400">About</Link></li>
      <li><Link to="/projects" className="hover:text-teal-400">Projects</Link></li>
      <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;