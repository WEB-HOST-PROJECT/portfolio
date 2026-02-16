import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800">
                    <a href="#hero">MyPortfolio</a>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8">
                    <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</a>
                    <a href="#skills" className="text-gray-600 hover:text-blue-600 transition duration-300">Skills</a>
                    <a href="#projects" className="text-gray-600 hover:text-blue-600 transition duration-300">Projects</a>
                    <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <a href="#about" className="block py-2 px-4 text-gray-600 hover:bg-gray-50" onClick={toggleMenu}>About</a>
                    <a href="#skills" className="block py-2 px-4 text-gray-600 hover:bg-gray-50" onClick={toggleMenu}>Skills</a>
                    <a href="#projects" className="block py-2 px-4 text-gray-600 hover:bg-gray-50" onClick={toggleMenu}>Projects</a>
                    <a href="#contact" className="block py-2 px-4 text-gray-600 hover:bg-gray-50" onClick={toggleMenu}>Contact</a>
                </div>
            )}
        </header>
    );
};

export default Header;
