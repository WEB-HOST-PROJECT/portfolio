import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="mb-4">&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
                <div className="flex justify-center space-x-6">
                    <a href="https://github.com/nitinyadav08i" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">GitHub</a>
                    <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
