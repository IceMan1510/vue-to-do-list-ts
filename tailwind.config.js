/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '5xl': '4.5rem'
      }
    },
  },
  plugins: [],
}

