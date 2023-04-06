/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-img': "linear-gradient(to bottom, rgba(0,0,0,1), rgba(54,54,54,0.8) 39%, rgba(28,28,28,0.4)), url('/img/salad-chicken.jpg')",
        'tutorial': "linear-gradient(to bottom, rgba(28,28,28,0.7), rgba(28,28,28,0.7)), url('/img/tutorial.jpg')",
        'play-btn': "url('/img/play.png')",
      },
      colors: {
        'primary': '#c89446',
        'paragraph': '#6f6f6f',
        'normal': '#383838',
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
        '28': '28px',
        '40': '40px',
        '68': '68px',
        listBase: ['16px','3.125'],
      },
      height: {
        '269': '269px',
        '328': '328px',
        '425': '425px',
        '455': '455px',
      },
      margin: {
        '5': '5px',
        '9': '9px',
        '20': '20px',
        '28': '28px',
        '33': '33px',
        '38': '38px',
        '43': '43px',
        '50': '50px',
        '56': '56px',
        '60': '60px',
        '70': '70px', 
        '90': '90px',
        '94': '94px',
        '130': '130px',
      },
      padding: {
        '1.75': '7px',
        '33': '33px',
        '98': '98px',
        '170': '170px',
      },
      width: {
        '219': '219px',
        '350': '350px',
        '445': '445px',
        '540': '540px',
        '919': '919px',
        '1013': '1013px',
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}
