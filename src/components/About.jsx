import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    <div className="md:w-1/2">
                        <img
                            src="https://placehold.co/600x400"
                            alt="Profile"
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            I'm a Developer
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            I am a lazy developer but working hard to build my dream World.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            When I'm not coding, you can find me [hobbies/interests]. I am always eager to learn new technologies and take on challenging projects.
                        </p>

                        <div className="flex gap-4">
                            <div className="text-center">
                                <h4 className="text-3xl font-bold text-blue-600">5+</h4>
                                <p className="text-gray-500 text-sm">Years Experience</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-3xl font-bold text-blue-600">50+</h4>
                                <p className="text-gray-500 text-sm">Projects Completed</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-3xl font-bold text-blue-600">10+</h4>
                                <p className="text-gray-500 text-sm">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
