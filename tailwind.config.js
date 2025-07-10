import typography from '@tailwindcss/typography'

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  content: [
    './components/**/*.{js,vue,ts}',
    './components/**/*.{html,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './pages/**/*.{html,js}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  variants: {
    extend: {},
  },
  plugins: [typography],
}
