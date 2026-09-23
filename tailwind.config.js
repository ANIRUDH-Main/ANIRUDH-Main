/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0C0C0C',
        textLight: '#D7E2EA',
        gradientStart: '#646973',
        gradientEnd: '#BBCCD7',
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest: '0.15em',
      }
    },
  },
  plugins: [],
}
