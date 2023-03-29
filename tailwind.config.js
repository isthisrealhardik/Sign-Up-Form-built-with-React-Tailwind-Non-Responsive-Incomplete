/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'red': 'hsl(0, 100% 74%)',
        'green': 'hsl(154, 59%, 51%)',
        // Accent
        'Blue': 'hsl(248, 32%, 49%)',
        // Neutral
        'darkBlue': 'hsl(249, 10%, 26%)',
        'grayishBlue': 'hsl(246, 25%, 77%)'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // 400, 500, 600, 700
      },
      backgroundImage: {
        'bgImagge': 'url("/images/bg-intro-desktop.png")'
      }
    },
  },
  plugins: [],
}

