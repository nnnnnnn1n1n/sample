const plugin = require('tailwindcss/plugin')

module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#fce8ff',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#f5b824',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  }