'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { useTheme } from "../context/ThemeContext"; // Importamos el hook useTheme
import caf from "../assets/caf.jpg";
import si from "../assets/si.jpg";
import www from "../assets/www.png";

const projects = [
    {
        title: "TIENDA DE CAFE",
        desc: "Una página web dedicada a la compra de café de diversas variedades. Los usuarios pueden explorar diferentes tipos de café.",
        devStack: "Next.js",
        link: "https://finalcafe.vercel.app/",
        git: "https://github.com/nelsonbarrera430/finalcafe",
        src: caf
    },
    {
        title: "E-COMMERCE",
        desc: "Un sitio de comercio electrónico en Next.js, donde los usuarios pueden navegar a través de múltiples categorías de productos, agregar productos al carrito, y realizar compras.",
        devStack: "Next.js",
        link: "https://proyectdos.vercel.app/",
        git: "https://github.com/nelsonbarrera430/proyectoDos",
        src: si
    },
    {
        title: "FORO DE RECETAS",
        desc: "Un foro en el que los usuarios pueden compartir sus recetas de cocina, comentar las publicaciones de otros y recibir valoraciones o likes a sus recetas.",
        devStack: "Next.js",
        link: "https://proyecto-uno-two.vercel.app/",
        git: "https://github.com/nelsonbarrera430/proyectoUno",
        src: www
    }
];

const Portfolio = () => {
    const { theme } = useTheme(); // Obtener el tema actual

    return (
        <div 
            className="text-white py-12 mt-400"  // Ajuste el margen superior para un mejor espacio
            id="portfolio"
            style={{
                backgroundImage: theme === 'dark' 
                    ? "linear-gradient(to bottom, #222222, #000000)" 
                    : "linear-gradient(to bottom, #e6e6e6, #f7f7f7)", // Cambiar el gradiente según el tema
                backgroundSize: "100% 100%", // Asegura que el gradiente cubra toda la sección
            }}
        >
            <h1 className={`text-6xl w-[320px] mx-auto font-semibold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Selected <span className="text-orange-400">Projects</span>
            </h1>

            <div className="max-w-[1200px] mx-auto mt-12 space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-12 flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "gap-12"}`}
                    >
                        {/* Descripción del proyecto */}
                        <div className={`space-y-2 max-w-[550px] text-center md:text-left ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            {/* Número del proyecto */}
                            <h2 className="text-7xl my-4" style={{ color: '#be4c0e' }}>{`0${index + 1}`}</h2>
                            <h2 className={`text-4xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{project.title}</h2>
                            <p className={`text-lg ${theme === 'dark' ? 'text-white/70' : 'text-black/70'} p-4`}>{project.desc}</p>
                            <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p>
                            <div className="w-64 h-[1px] bg-gray-400 my-4 mx-auto md:mx-0">
                                <a 
                                    href={project.link} 
                                    className={`mr-6 text-[#be4c0e] hover:text-orange-400 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                                >
                                    Link
                                </a>
                                <a 
                                    href={project.git} 
                                    className={`text-[#be4c0e] hover:text-orange-400 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                                >
                                    Git
                                </a>
                            </div>
                        </div>

                        {/* Imagen del proyecto */}
                        <div className="flex justify-center items-center">
                            <Image 
                                src={project.src} 
                                alt={project.title} 
                                className="h-[350px] w-[500px] object-cover border rounded border-gray-700"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
