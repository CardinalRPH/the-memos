/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        alphaWhite: {
          950:'#cecececc'
        }
      }
    },
  },
  plugins: [],
}

