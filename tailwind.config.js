/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }

  module.exports = {
    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('/images/team.png')",
          'footer-texture': "url('/img/footer-texture.png')",
        }
      }
    }
  }