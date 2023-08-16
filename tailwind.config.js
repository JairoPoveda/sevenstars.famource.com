/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      boxShadow: {
        'menuShadow' : '0px 4px 7px 0px rgba(183, 199, 230, 0.3)',
      }
    },
  },
  plugins: [],
}

