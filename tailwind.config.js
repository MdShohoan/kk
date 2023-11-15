/** @type {import('tailwindcss').Config} */
import { colors } from './src/theme'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          light:colors?.primary?.light,
          dark:'',
          DEFAULT: colors?.primary?.default,
          'contrast': colors?.primary?.contrast,
        },
        secondary:{
          light:'#CAD7FA',
          dark:'',
          DEFAULT: '',
          'contrast': ''
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
