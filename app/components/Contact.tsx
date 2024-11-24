'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTheme } from '../context/ThemeContext';  // Importamos el hook de tema

// Inicializa EmailJS con tu Public Key
emailjs.init('ALMvBKSLDIs1zj3Tu'); // Tu Public Key

const Contact = () => {
  const { theme } = useTheme();  // Obtenemos el tema actual (oscuro o claro)
  
  // Estado para los campos del formulario
  const [formData, setFormData] = useState({
    from_name: '',
    to_name: '',
    message: '',
    email_id: '',
    reply_to: ''
  });

  // Maneja los cambios en los campos del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Usamos el Service ID 'service_5ftzo6i' y el Template ID 'template_41k0t98'
    emailjs.sendForm('service_5ftzo6i', 'template_41k0t98', e.currentTarget) // Cambié e.target a e.currentTarget
      .then((result) => {
        console.log(result.text);
        alert('¡Mensaje enviado con éxito!');
      }, (error) => {
        console.error(error.text);
        alert('No se pudo enviar el mensaje. Intenta de nuevo más tarde.');
      });
  };

  return (
    <div 
      className={`max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-center items-center p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gradient-to-b from-[#e6e6e6] to-[#ffffff]'}`} 
      id="contact"
    >
      {/* Formulario de contacto */}
      <div className={`rounded-xl max-w-[500px] p-8 w-full transform transition-all duration-500 ${theme === 'dark' ? 'bg-black/80 text-white' : 'bg-gray-200 text-black'} 
        hover:scale-105 shadow-2xl ${theme === 'dark' ? 'shadow-white' : 'shadow-white'}`}>

        <h2 className='text-5xl font-bold text-orange-400 mb-4 text-center'>Let's Connect</h2>
        <p className={`text-center mb-6 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Send me a message and let's schedule a call</p>

        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className='grid md:grid-cols-2 gap-4'>
            <input
              className={`rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ${theme === 'dark' ? 'bg-gray-700 text-white border border-gray-600' : 'bg-white text-black border border-gray-300'}`}
              placeholder='First Name'
              name="from_name"
              value={formData.from_name}
              onChange={handleInputChange}
            />
            <input
              className={`rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ${theme === 'dark' ? 'bg-gray-700 text-white border border-gray-600' : 'bg-white text-black border border-gray-300'}`}
              placeholder='Last Name'
              name="to_name"
              value={formData.to_name}
              onChange={handleInputChange}
            />
            <input
              className={`rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ${theme === 'dark' ? 'bg-gray-700 text-white border border-gray-600' : 'bg-white text-black border border-gray-300'}`}
              placeholder='Email'
              name="email_id"
              value={formData.email_id}
              onChange={handleInputChange}
            />
            <input
              className={`rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ${theme === 'dark' ? 'bg-gray-700 text-white border border-gray-600' : 'bg-white text-black border border-gray-300'}`}
              placeholder='Phone'
              name="reply_to"
              value={formData.reply_to}
              onChange={handleInputChange}
            />
          </div>
          <textarea
            className={`bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ${theme === 'dark' ? 'bg-gray-700 text-white border border-gray-600' : 'bg-white text-black border border-gray-300'}`}
            placeholder='Your Message'
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          <button
            className='bg-orange-700 hover:bg-orange-800 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
