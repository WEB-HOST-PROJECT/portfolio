import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="bg-gray-50 h-screen flex items-center justify-center">
            <div className="text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                    Hi, I'm <span className="text-blue-600">Nitin Yadav</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    <span className="font-semibold text-gray-800">Web Developer</span>
                </p>
                <a
                    href="#projects"
                    className="px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition duration-300 shadow-lg"
                >
                    View My Work
                </a>
            </div>
        </section>
    );
};

export default Hero;
