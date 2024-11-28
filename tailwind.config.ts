import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Definición de colores personalizados
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1E40AF", // Azul oscuro
        secondary: "#9333EA", // Púrpura
      },
      // Configuración de fuentes externas
      fontFamily: {
        sans: ['"Inter"', "sans-serif"], // Fuente Inter para texto principal
        serif: ['"Merriweather"', "serif"], // Fuente Merriweather para encabezados
      },
      // Espaciados personalizados
      spacing: {
        72: "18rem", // Espaciado grande
        84: "21rem",
        96: "24rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
