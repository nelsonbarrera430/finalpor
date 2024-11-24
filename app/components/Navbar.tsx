'use client';

import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { useTheme } from '../context/ThemeContext'; // Importamos el hook de tema

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Skills", path: "#skills" },
  { title: "Contact", path: "#contact" }, // Agregado el enlace de Contacto
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [mounted, setMounted] = useState(false); // Estado para manejar el montaje del componente
  const { theme, toggleTheme } = useTheme(); // Obtenemos el tema actual y la función para alternarlo

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    setMounted(true); // Establecemos que el componente se ha montado
  }, []);

  if (!mounted) {
    return null; // Evitamos que el componente se renderice hasta que esté montado
  }

  return (
    <div className={`pt-6 ${theme === 'dark' ? 'bg-[#000000]' : 'bg-[#F4F4F4]'} text-white`}>
      {/* Navbar Desktop */}
      <div className={`hidden md:flex items-center px-20 py-4 mx-auto max-w-full ${theme === 'dark' ? 'bg-[#2F2F2F]' : 'bg-[#F4F4F4]'} text-white shadow-lg fixed w-full top-0 z-50`}>
        <ul className="flex flex-row p-4 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.path} 
                className={`relative group text-lg hover:text-[#FFA500] ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              >
                {link.title}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFA500] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Íconos de WhatsApp y GitHub */}
        <div className="flex space-x-6 ml-auto">
          <a 
            href="https://wa.me/573209650975"
            target="_blank" 
            className={`hover:text-[#25D366] ${theme === 'dark' ? 'text-white' : 'text-black'}`} 
          >
            <BsWhatsapp size={30} />
          </a>
          <a 
            href="https://github.com/nelsonbarrera430" 
            target="_blank" 
            className={`hover:text-[#6e5494] ${theme === 'dark' ? 'text-white' : 'text-black'}`} 
          >
            <BsGithub size={30} />
          </a>
        </div>

        {/* Botón para cambiar de tema */}
        <div
          onClick={toggleTheme}
          className="cursor-pointer text-lg px-4 py-2 rounded-lg bg-[#FFA500] hover:bg-[#FF7F00] ml-6"
        >
          {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
        </div>
      </div>

      {/* Menu móvil */}
      <div onClick={toggleNav} className="md:hidden absolute top-5 left-5 cursor-pointer z-50">
        {theme === 'dark' ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Menú móvil (se muestra cuando se abre el menú) */}
      {nav && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black/80 text-white flex flex-col items-center pt-12 space-y-8 transition-all duration-500 ease-in-out z-50">
          <ul className="space-y-8">
            {navLinks.map((link, index) => (
              <li key={index} className="text-xl">
                <a 
                  href={link.path} 
                  onClick={closeNav} 
                  className={`relative group text-lg hover:text-[#FFA500] ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                >
                  {link.title}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFA500] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-6 mt-6">
            <a 
              href="https://api.whatsapp.com/send/?phone=573209650975&text&type=phone_number&app_absent=0" 
              target="_blank" 
              className={`hover:text-[#25D366] ${theme === 'dark' ? 'text-white' : 'text-black'}`} 
            >
              <BsWhatsapp size={30} />
            </a>
            <a 
              href="https://github.com/nelsonbarrera430" 
              target="_blank" 
              className={`hover:text-[#6e5494] ${theme === 'dark' ? 'text-white' : 'text-black'}`} 
            >
              <BsGithub size={30} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
