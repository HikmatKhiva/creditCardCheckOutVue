/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
    colors:{
      'black-one':'#3A3A3A',
      'black-two':'#616161',
    },
    fontFamily:{
      varela: ['Varela','sans-serif'],
    }
  
    },
  },
  plugins: [],
}