/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-img': "linear-gradient(to bottom, rgba(0,0,0,1), rgba(54,54,54,0.8) 39%, rgba(28,28,28,0.4)), url('/img/salad-chicken.jpg')",
      },
      colors: {
        'dark': '#000000eb',
        'grey': '#36363680',
        'greyish': '#1c1c1c66',
      },
      spacing: {
        '1440': '90rem',
        '612': '38.25rem',
      },
      fontFamily: {
        'pinyon': ['pinyon', 'sans-serif'],
        'source-sans-pro': ['source sans pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
