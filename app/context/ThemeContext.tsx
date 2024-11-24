"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

// Tipo para el contexto
interface ThemeContextType {
  theme: string; // Cambiar a tema (gris o rojo)
  toggleTheme: () => void;
}

// Crear el contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook personalizado para usar el contexto en otros componentes
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};

// Tipo de las props del ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

// Proveedor del contexto
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light'); // Estado para "light" o "dark"

  // Revisar el estado de "theme" guardado en localStorage al cargar la app
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Alternar el tema y guardarlo en localStorage
  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
