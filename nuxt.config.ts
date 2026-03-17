// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  ssr: false,
  nitro: {
    preset: 'static'
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  vite:{
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/assets/css/main.css']
})
