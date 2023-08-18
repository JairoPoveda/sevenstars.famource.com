/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Noto Sans Bengali']
      },
      boxShadow: {
        'menuShadow': '0px 4px 7px 0px rgba(183, 199, 230, 0.3)',
        'service': '3px 3px 15px -3px #7d7dee, 6px 6px 6px -4px rgb(255 255 255 / 10%);',
        'card': '6px 6px 12px -1px rgb(37 37 37 / 15%), 15px 15px 25px -6px rgb(255 255 255 / 10%);',
      },
    },
  },
  plugins: [],
}

