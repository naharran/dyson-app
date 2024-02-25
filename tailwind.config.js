/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "home": "#F1F7ED"
      },
      fontSize: {
        "24": "24px"
      }
    },
  },
  plugins: [],
}

