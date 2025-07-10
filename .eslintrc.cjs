module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "vue/multi-word-component-names": "off"
  }
}
