/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#A2D2DF', // Light blue
        pastelYellow: '#F6EFBD', // Soft yellow
        mutedRose: '#BC7C7C', // Muted rose
        placeholderPopping: '#ff5733',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

