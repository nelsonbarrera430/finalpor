"use client";  // Indica que este componente se ejecuta en el cliente

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext"; // Importamos el hook para acceder al tema

// Asegúrate de tener la imagen correcta en el directorio assets
import fotoperfil2 from "../assets/fotoperfil2.jpeg"; // Cambia por tu propia imagen

const About = () => {
  const [selectedSection, setSelectedSection] = useState("miVida");
  const { theme } = useTheme(); // Obtenemos el tema actual

  // Función para manejar el cambio de contenido al hacer clic en los botones
  const handleButtonClick = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <div
      className={`max-w-[1900px] mx-auto py-32 px-4`}
      id="about"
      style={{
        backgroundImage: theme === 'dark' 
          ? "linear-gradient(to bottom, #000000, #222222)" 
          : "linear-gradient(to bottom, #ffffff, #e6e6e6)", // Cambiar el gradiente según el tema
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex flex-col md:flex-row ml-14 justify-start items-center">
        {/* Foto - Más cerca del texto */}
        <div className="md:w-5/12 flex justify-center md:justify-start mb-8 md:mb-0">
          <div
            className="relative w-64 h-64 md:w-96 md:h-96 overflow-hidden transform hover:scale-105 transition-all duration-500 ease-in-out" 
            style={{
              boxShadow: theme === 'dark' 
                ? '0 0 25px 10px rgba(255, 255, 255, 0.7)' // Sombra blanca para el modo oscuro
                : '0 0 25px 10px rgba(0, 0, 0, 0.7)', // Sombra negra para el modo claro
              transform: 'translateY(-10px)',  // Efecto de flotación
              borderRadius: '10px', // Aseguramos que tenga bordes redondeados, pero no circulares
            }}
          >
            <Image
              src={fotoperfil2} // Asegúrate de tener la ruta correcta
              alt="My Photo"
              fill // Usamos 'fill' para que la imagen ocupe el espacio disponible
              style={{ objectFit: 'cover' }} // Recorta y ajusta la imagen
              className="w-full h-full" // Hace que la imagen ocupe toda el área del contenedor
            />
          </div>
        </div>

        {/* Contenedor con texto y botones - Más cercano a la foto */}
        <div 
          className={`md:w-7/12 w-full rounded-xl p-8 shadow-lg ml-4 md:ml-6 ${theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-[#f4f4f4]'}`}
          style={{ minHeight: '400px' }} 
        >
          {/* Botones - estarán sobre el texto */}
          <div className="flex justify-start space-x-4 mb-6">
            <button
              className={`px-6 py-2 ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'} rounded-lg hover:${theme === 'dark' ? 'bg-[#444444]' : 'bg-[#333333]'} transition duration-300`}
              onClick={() => handleButtonClick("miVida")}
            >
              Mi Vida
            </button>
            <button
              className={`px-6 py-2 ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'} rounded-lg hover:${theme === 'dark' ? 'bg-[#444444]' : 'bg-[#333333]'} transition duration-300`}
              onClick={() => handleButtonClick("pasatiempos")}
            >
              Pasatiempos
            </button>
            <button
              className={`px-6 py-2 ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'} rounded-lg hover:${theme === 'dark' ? 'bg-[#444444]' : 'bg-[#333333]'} transition duration-300`}
              onClick={() => handleButtonClick("trabajo")}
            >
              Trabajo
            </button>
          </div>

          {/* Texto que cambia según el botón seleccionado */}
          <div className={`text-${theme === 'dark' ? 'white' : 'black'}`} style={{
            textShadow: theme === 'dark' ? '0 0 20px rgba(255, 255, 255, 0.7)' : '0 0 20px rgba(0, 0, 0, 0.7)', // Efecto neón
          }}>
            {selectedSection === "miVida" && (
              <>
                <h1 className="text-3xl font-semibold mb-4">Mi Vida</h1>
                <p className="text-lg">
                  Actualmente, me encuentro en un proceso de formación en Ingeniería de Software en la Universidad Cooperativa, donde estoy adquiriendo los conocimientos y habilidades necesarios para desarrollarme como profesional en el campo de la tecnología. Mi carrera me ha permitido profundizar en áreas como la programación, el diseño de sistemas, la arquitectura de software y la gestión de proyectos tecnológicos, lo que me ha dado una visión integral de cómo abordar los desafíos en el desarrollo de soluciones tecnológicas.
                </p>
              </>
            )}
            {selectedSection === "trabajo" && (
              <>
                <h1 className="text-3xl font-semibold mb-4">Trabajo</h1>
                <p className="text-lg">
                  Tengo una gran afinidad por la gestión de proyectos, donde puedo aplicar mis capacidades organizativas y de liderazgo para coordinar equipos, establecer plazos y garantizar que cada fase del proceso se lleve a cabo de manera fluida. Disfruto liderando iniciativas que requieren tanto habilidades analíticas como capacidad para adaptarme a los cambios, y encontrar la mejor forma de resolver problemas complejos dentro de un marco de tiempo y presupuesto determinado.
                </p>
              </>
            )}
            {selectedSection === "pasatiempos" && (
              <>
                <h1 className="text-3xl font-semibold mb-4">Pasatiempos</h1>
                <p className="text-lg">
                  En cuanto a mis pasatiempos, me apasiona el fútbol, un deporte que no solo disfruto jugando, sino también viéndolo. Otro de mis pasatiempos favoritos es jugar videojuegos. También disfruto mucho de la edición de videos. Esta actividad me permite ser creativo y combinar mis habilidades técnicas para producir contenido visual atractivo. Ya sea creando pequeños proyectos personales o editando videos para compartir con amigos. 
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
