/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'lili':'10px',
        'sm': '640px',
        'md': '768px',
        'lg' : '992px',
        'xl' : '1280px',
        '2xl' : '1500px',
      }
    },
  },
}
