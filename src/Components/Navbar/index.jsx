import { useState } from "react";
import { FaBars, FaLock } from "react-icons/fa";

function Navbar() {
    const [IsOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!IsOpen);
    };

    return (
        <div className="relative pt-8 h-20 flex justify-between items-center px-4 md:px-8 lg:px-16 text-grey w-full lg:space-x-40">
            {/* Logo */}
            <div className="text-4xl font-bold">JOBOARD</div>

            {/* Hamburger Menu Button for Small Screens */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-grey mr-4" aria-label="Toggle menu">
                    <FaBars />
                </button>
            </div>

            {/* Navigation links for larger screens */}
            <ul className="hidden lg:flex lg:space-x-12">
                <li><a href="#" className="lg:text-l md:text-sm">Home</a></li>
                <li><a href="#" className="lg:text-l md:text-sm">About</a></li>
                <li><a href="#" className="lg:text-l md:text-sm">Job Listing</a></li>
                <li><a href="#" className="lg:text-l md:text-sm">Blog</a></li>
                <li><a href="#" className="lg:text-l md:text-sm">Contact</a></li>
            </ul>

            {/* Login Button */}
            <div className="hidden lg:flex">
                <button className="flex bg-transparent hover:bg-teal-600 hover:text-white text-xl text-teal-500 px-2 py-1 border border-teal-500 rounded">
                    <FaLock className="pt-1" />
                    Login
                </button>
            </div>

            {/* Mobile Menu - Opens below the Navbar */}
            {IsOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 lg:hidden">
                    <a href="#" className="text-teal-500 text-lg">Home</a>
                    <a href="#" className="text-teal-500 text-lg">About</a>
                    <a href="#" className="text-teal-500 text-lg">Job Listing</a>
                    <a href="#" className="text-teal-500 text-lg">Blog</a>
                    <a href="#" className="text-teal-500 text-lg">Contact</a>
                    <button className="flex bg-transparent hover:bg-teal-600 hover:text-white text-xl text-teal-500 px-4 py-2 border border-teal-500 rounded">
                        <FaLock className="pt-1" />
                        <a href="/login" className="lg:text-l md:text-sm">Login</a>
                    </button>
                </div>
            )}
        </div>
    );
}

export default Navbar;
