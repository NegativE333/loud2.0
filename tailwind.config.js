/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
       slideInLeft :{
        '0%' :{
            transform: "translateX(-200px)"
        },
        '100%':{
            transform: "translateX(0)"
        },
        slideInDown: {
          '0%':{
            transform: 'translateY(-30px)'
          },
          '100%':{
            transform: 'translateX(0)'
          }
        },
      },
      },
      animation:{
        'slideLeft': 'slideInLeft 2s ease-in-out 3s',
        'slideLeft2': 'slideInLeft 2s ease-in-out',
        'slideDown': 'slideInDown 2s ease-in-out'
      }
    },
  },
  plugins: [],
}
