/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Rutas para buscar clases de Tailwind
  theme: {
    extend: {}, // Configuración personalizada de la temática
  },
  plugins: [], // Aquí puedes agregar plugins de Tailwind
};
