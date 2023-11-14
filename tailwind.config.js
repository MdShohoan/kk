/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          light:'#F0ECF9',
          dark:'',
          DEFAULT: '#6F42C1',
          'contrast': 'rgba(111, 66, 193, 0.60)'
        },
        'gray1':'#808081'
      },
      fontFamily:{
        'arvo': ['Arvo'],
        'mulish': ['Mulish']
      }
      
    },
  },
  plugins: [],
}
