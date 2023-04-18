/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-img': "linear-gradient(to bottom, rgba(0,0,0,1), rgba(54,54,54,0.8) 39%, rgba(28,28,28,0.4)), url('/img/salad-chicken.jpg')",
        'tutorial': "linear-gradient(to bottom, rgba(0,0,0,0.7) 5%, rgba(54,54,54,0.7) 20%, rgba(54,54,54,0.7)), url('/img/tutorial.jpg')",
        'play-btn': "url('/img/play-btn.png')",
        'amazing-chicken': "url('/img/crusted-chicken-125.png')",
        'apples': "url('/img/apples.png')",
        'shape': "url('/img/Shape.png')",
        'ofull': "url('/img/oval-full.png')",
        'oempty': "url('/img/oval-empty.png')",
        'splash': "url('/img/splash.png')",
      },
      boxShadow: {
        'tutorial': '0 0 30px 15px rgba(127,127,127,0.5)',
      },
      colors: {
        'primary': '#c89446',
        'secondary': '#c99649',
        'paragraph': '#6f6f6f',
        'normal': '#383838',
        'grey': '#979797',
        'tuto': '#1c1c1c',
      },
      spacing: {
        '24': '24px',
      },
      letterSpacing: {
        '2': '2px',
      },
      fontFamily: {
        'pinyon': ['Pinyon Script', 'sans-serif'],
        'source-sans-pro': ['source sans pro', 'sans-serif'],
      },
      fontSize: {
        '28': '28px',
        '40': '40px',
        listBase: ['16px','3.125'],
      },
      height: {
        '328': '328px',
      },
      margin: {
        '5': '5px',
        '20': '20px',
        '28': '28px',
        '33': '33px',
        '38': '38px',
        '50': '50px',
      },
      padding: {
        '9': '9px',
        '33': '33px',
      },
      screens: {
        'desktop': '1440px',
      },
      width: {
        '275': '275px',
        '350': '350px',
        '445': '445px',
        '540': '540px',
        '1028': '1028px',
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}
