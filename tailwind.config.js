/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        unique: 'rgb(199,179,119)',
      },
    },
  },
  plugins: [],
}
