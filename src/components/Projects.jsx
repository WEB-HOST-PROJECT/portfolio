import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Gallery App",
            category: "Web Application",
            image: "https://placehold.co/600x400?text=Gallery+App",
            description: "A gallery web app to showcase images. Available on GitHub.",
            link: "https://github.com/nitinyadav08i/gallery_app"
        },
        {
            title: "JavaScript Resources",
            category: "Education",
            image: "https://placehold.co/600x400?text=JS+Learning",
            description: "A collection of resources and code for learning JavaScript.",
            link: "https://github.com/nitinyadav08i/JavaScript-part-1"
        },
        {
            title: "Portfolio Website",
            category: "Web Development",
            image: "https://placehold.co/600x400?text=Portfolio",
            description: "My personal portfolio website built with React and Tailwind CSS.",
            link: "https://github.com/nitinyadav08i"
        },
    ];

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">My Projects</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <span className="text-sm font-semibold text-blue-600 mb-2 block">{project.category}</span>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4 h-20 overflow-hidden text-ellipsis">
                                    {project.description}
                                </p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">View on GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
