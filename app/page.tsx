"use client";

import { ThemeProvider } from './context/ThemeContext';  // Asegúrate de que ThemeProvider esté correctamente exportado aquí
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    </ThemeProvider>
  );
}
