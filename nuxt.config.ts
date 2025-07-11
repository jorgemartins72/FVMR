// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { head } from './head'

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ['@nuxtjs/google-fonts', '@nuxt/ui', 'nuxt-auth-utils'],
  googleFonts: {
    display: 'swap',
    prefetch: true,
    preconnect: false,
    preload: true,
    useStylesheet: true,
    families: {
      'Roboto Condensed': [100, 300, 400, 700],
      Roboto: [100, 300, 400, 700],
      Geologica: [100, 400, 600, 800, 900],
      'Fira Code': [600],
    },
  },
  app: {
    head,
  },
  runtimeConfig: {
    oauth: {
      // provider in lowercase (github, google, etc.)
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      },
    },
    public: {
      apiDatascore: process.env.API_DATASCORE, // || 'http://localhost:8000',
      apiBaseUrl: process.env.API_DATASCORE, // || 'http://localhost:8000',
    },
  },
})
