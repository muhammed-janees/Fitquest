/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "color-primary": "#01051e",
        "color-primary-light" : "#020726",
        "color-primary-dark" : "#010417",
        "color-secondary" : "#ff7d3b",
        "color-gray" : "#333",
        "color-white" : "#ffffff",
        "color-blob" : "#A427DF",
        "color-light-gray" : "#c6c6c6"
      }
    },
    container: {
      center: true,
      padding: {
        default: '20px',
        md: "60px",
      }
    }
  },
  plugins: [],
}

