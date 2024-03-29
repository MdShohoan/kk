/** @type {import('tailwindcss').Config} */
import { colors } from "./src/theme";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors?.primary?.light,
          dark: "",
          DEFAULT: colors?.primary?.default,
          contrast: colors?.primary?.contrast,
          background: colors?.primary?.background,
        },
        secondary: {
          light: "#CAD7FA",
          dark: "",
          DEFAULT: "",
          contrast: "",
        },
        gray1: "#808081",
        gray2: "#040404",
        gray3: "#666666",
        gray4: "#00000033",
        gray5: colors?.gray5,
      },
      fontFamily: {
        // 'arvo': ['Arvo'],
        // 'mulish': ['Mulish'],
        solaimanLipi: ["SolaimanLipi"],
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};
