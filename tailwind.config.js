/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4200FF',
          hover: '#3600D1',
          light: '#ECE5FF',
          surface: '#F8F5FF'
        },
        darkGrey: '#404040',
        lightGrey: '#C5C5C5',
        subtleGrey: '#ECECEC',
        surfaceLight: '#F5F5F5',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.05)',
        card: '0 10px 30px rgba(0, 0, 0, 0.06)',
        lift: '0 16px 40px rgba(66, 0, 255, 0.12)',
        glow: '0 0 25px rgba(66, 0, 255, 0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
