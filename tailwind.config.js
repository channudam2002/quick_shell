/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Lato', 'ui-sans-serif', 'system-ui'],
      },
      colors:{
        'general': '#01303f',
        'main': '#02577a',
        'sub' : '#02a9f7',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

