/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        writed:{
          from: { width: '0'},
          to:{width: '97%'}
        }
      },
      animation:{
        write: 'writed 5s 1s normal'
      }
    },
  },
  plugins: [],
}
