'use client';

import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';
import { useTheme } from "../context/ThemeContext"; // Importamos el hook useTheme

const skillsIcons = [
    { icon: <FaHtml5 size={120} />, label: "HTML" },
    { icon: <FaCss3Alt size={120} />, label: "CSS" },
    { icon: <FaReact size={120} />, label: "REACT" },
    { icon: <FaJsSquare size={120} />, label: "JAVASCRIPT" },
];

const Skills = () => {
    const { theme } = useTheme(); // Obtener el tema actual

    return (
        <div 
            className={`text-white py-32 lobster-two-bold ${theme === 'dark' ? 'bg-gradient-to-b from-[#000000] to-[#181818]' : 'bg-gradient-to-b from-[#f7f7f7] to-[#e6e6e6]'}`} 
            id="skills"
        >
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto p-8 text-center">
                <h2 className={`text-6xl font-bold mb-12 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    What I do
                </h2>
                
                {/* Contenedor con grid para el contenido */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
                    {skillsIcons.map((skill, index) => (
                        <div
                            key={index}
                            className={`h-[220px] w-[220px] mx-auto flex flex-col justify-center items-center ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-300'} p-6 rounded-xl transition-all duration-300 animate-float neon-card`}
                        >
                            <div className={`neon-icon ${theme === 'dark' ? 'text-orange-400' : 'text-purple-400'}`}>{skill.icon}</div>
                            <p className={`mt-8 text-xl ${theme === 'dark' ? 'text-white' : 'text-[#ffffff]'}`}>{skill.label}</p> {/* Más claro en modo claro */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
