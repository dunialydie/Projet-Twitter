/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  // darkMode: "class"
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    function({addUtilities}){
      const newUtilities= {
          ".no-scrollbar::-webkit-scrollbar":{
            display: "none"
          },
          'no-scrollbar':{
            '-ms-overflow-style':'none',
            'scrollbar-width':"none",
          }

      }
      addUtilities(newUtilities)

    }
],
}

