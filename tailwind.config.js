/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-img': "linear-gradient(to bottom, rgba(0,0,0,1), rgba(54,54,54,0.8) 39%, rgba(28,28,28,0.4)), url('/img/salad-chicken.jpg')",
      },
      colors: {
        'primary': '#c89446',
        'paragraph': '#6f6f6f',
      },
      spacing: {
        '1440': '90rem',
        '612': '38.25rem',
      },
      letterSpacing: {
        '2': '2px',
        '4': '4px',
        '13': '13px',
        '50': '50px',
      },
      fontFamily: {
        'pinyon': ['Pinyon Script', 'sans-serif'],
        'source-sans-pro': ['source sans pro', 'sans-serif'],
      },
      fontSize: {
        '24': '24px',
        '68': '68px',
      },
      margin: {
        '5': '5px',
        '9': '9px',
        '33': '33px',
        '50': '50px',
        '70': '70px', 
      },
      padding: {
        '1.75': '7px',
        '33': '33px',
        '98': '98px',
        '170': '170px',
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}
