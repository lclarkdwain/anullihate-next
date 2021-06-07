const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'scheme-default': '#e3e0cf',
        'scheme-primary': '#9fa8a3',
        'scheme-secondary': '#c5d5cb',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.2xl') },
        h2: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.lg') },
        h4: { fontSize: theme('fontSize.base') },
        h5: { fontSize: theme('fontSize.sm') },
        h6: { fontSize: theme('fontSize.xs') },
      })
    }),
  ],
}
