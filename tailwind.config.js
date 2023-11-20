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
        'gray1':'#808081',
        'gray2': '#040404',
        'gray3': '#666666',
        'gray4': '#00000033',
        'gray5': colors?.gray5,
      },
      fontFamily:{
        'arvo': ['Arvo'],
        'mulish': ['Mulish']
      }
      
    },
    container: {
      center: true,
      padding:'1rem'
    },
  },
  plugins: [],
}
