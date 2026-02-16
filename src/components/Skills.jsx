import React from 'react';

const Skills = () => {
    const skills = [
        { name: "HTML5", level: "90%" },
        { name: "CSS3 / Tailwind", level: "85%" },
        { name: "JavaScript (ES6+)", level: "80%" },
        { name: "React.js", level: "75%" },
        { name: "Node.js", level: "70%" },
        { name: "Git / GitHub", level: "85%" },
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">My Skills</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded"></div>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold text-gray-700">{skill.name}</span>
                                <span className="text-blue-600 font-semibold">{skill.level}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{ width: skill.level }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
