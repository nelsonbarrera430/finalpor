'use client';

import Image from "next/image";
import perfil1 from "../assets/perfil1.jpeg";
import { motion } from "framer-motion";
import { BsGithub, BsWhatsapp, BsLinkedin } from "react-icons/bs"; // Importar los íconos de LinkedIn, WhatsApp y GitHub
import { useTheme } from "../context/ThemeContext"; // Importamos el hook para acceder al tema
import { useEffect, useState } from "react"; // Importar useEffect y useState

const Hero = () => {
  const { theme } = useTheme(); // Obtenemos el tema actual
  const [mounted, setMounted] = useState(false);

  // Aseguramos que el tema solo se lea después de que el componente se haya montado en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  // Si el componente aún no se ha montado, mostramos un contenedor vacío para evitar el desajuste de hidratación
  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`py-24 mt-16 relative overflow-hidden ${theme === 'dark' ? 'bg-black' : 'bg-white'}`} // Fondo negro en modo oscuro y blanco en modo claro
      style={{
        backgroundImage: theme === 'dark' 
          ? 'linear-gradient(to bottom, #000000, #000000)' // Gradiente de negro a gris oscuro en modo oscuro
          : 'linear-gradient(to bottom, #ffffff, #ffffff)', // Gradiente de blanco a gris claro en modo claro
        backgroundSize: "100% 100%",
      }}
    >
      {/* Hero Section */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center justify-between text-center px-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Texto a la izquierda */}
        <div className="text-left max-w-lg w-full md:w-1/2">
          <motion.div
            className="text-5xl md:text-8xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <h1 className={`ml-16 mt-18 ${theme === 'dark' ? 'text-[#D1D1D1]' : 'text-black'}`}>Hi, I am</h1>
            <h1 className={`ml-16 lobster-regular ${theme === 'dark' ? 'text-[#FFFFFF]' : 'text-black'}`}>
              Nelson Barrera
            </h1>
          </motion.div>

          {/* Descripción */}
          <motion.p
            className={`text-xl mt-1 ml-10 ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            I am a web developer in training, passionate about technology and creating digital solutions.
          </motion.p>

          {/* Iconos de redes sociales */}
          <motion.div
            className="mt-8 flex justify-start space-x-6 ml-10 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Icono de WhatsApp */}
            <a
              href="https://wa.me/3209650975"
              target="_blank"
              className={`hover:text-[#25D366] ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            >
              <BsWhatsapp size={30} />
            </a>

            {/* Icono de GitHub */}
            <a
              href="https://github.com/nelsonbarrera430"
              target="_blank"
              className={`hover:text-[#6e5494] ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            >
              <BsGithub size={30} />
            </a>

            {/* Icono de LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tuUsuarioLinkedin"
              target="_blank"
              className={`hover:text-[#0A66C2] ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            >
              <BsLinkedin size={30} />
            </a>
          </motion.div>
        </div>

        {/* Imagen de perfil a la derecha */}
        <motion.div
          className="relative z-10 mt-8 md:mt-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            animate={{
              y: ["0px", "-10px", "0px"],
            }}
            transition={{
              y: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <Image
              src={perfil1}
              alt="profile picture"
              height={400}
              width={400}
              className="rounded-full z-10 w-64 h-64 md:w-96 md:h-96" // Responsivo
              style={{
                boxShadow: theme === 'dark' 
                  ? '0 0 20px 10px rgba(255, 255, 255, 0.7)' // Sombra blanca para modo oscuro
                  : '0 0 20px 10px rgba(0, 0, 0, 0.7)', // Sombra negra para modo claro
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Cambio entre GIF y imagen estática según el tema */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1">
        {theme === 'dark' ? (
          <motion.img
            src="https://mymodernmet.com/wp/wp-content/uploads/2019/10/nasa-black-hole-visualization-1.gif"
            alt="NASA Black Hole GIF"
            className="w-[400px] md:w-[500px]"
            transition={{
              scale: {
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          />
        ) : (
          <motion.img
            src="https://33.media.tumblr.com/3d38c0c7ff576bcdbf95be3a4b284103/tumblr_nkzssmfAyT1twrbr9o1_500.gif"
            alt="Animated GIF"
            className="w-[300px] md:w-[400px]"
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
