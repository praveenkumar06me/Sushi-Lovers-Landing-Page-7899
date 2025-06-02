/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sushi: {
          red: '#D32F2F',
          orange: '#FF6B35',
          green: '#2E7D32',
          cream: '#FFF8E1',
          dark: '#1A1A1A',
          gray: '#424242'
        }
      },
      fontFamily: {
        japanese: ['Noto Sans JP', 'sans-serif'],
      }
    },
  },
  plugins: [],
}