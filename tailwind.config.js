/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      minWidth: {
        'search-bar': '348px',
      },
      colors: {
        'bnb-pink': '#FF385C',
        'bnb-pink-hover': '#ea3d49',
        'heart-color': 'rgba(0, 0, 0, 0.5)',
        'hover-search': '#F7F7F7',
        'icon-category': '#717171',
        'icon-sdb': '#ebebebeb'
      },
      screens: {
        'xs': '550px',
        'xm': '950px',
        'xlg': '1180px',
        '3xl': '1640px',
        '4xl': '1840px'
      },
      maxWidth:{
        '8xl': '1840px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
