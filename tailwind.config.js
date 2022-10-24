/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./Components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#1da58e',
        'dark': '#06323d',
        'grayish': '#243033',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
      boxShadow:{
        'button': '0px 32px 35px 7px rgba(29,165,142,0.08)'
      },
    },
  },
  plugins: [],
}
