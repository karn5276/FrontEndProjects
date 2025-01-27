/* src/components/Navbar.jsx */
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className="hidden md:flex space-x-4">
          <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-teal-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-teal-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2">
          <li><Link to="/" className="block hover:text-teal-400">Home</Link></li>
          <li><Link to="/about" className="block hover:text-teal-400">About</Link></li>
          <li><Link to="/projects" className="block hover:text-teal-400">Projects</Link></li>
          <li><Link to="/contact" className="block hover:text-teal-400">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;