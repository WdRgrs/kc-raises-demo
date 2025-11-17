// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/4.x/guide/going-further/runtime-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { 
    enabled: true 
  },
  
  modules: ['@nuxt/ui'],
  
  css: ['~/assets/css/main.css'],
  
  ui: {
    fonts: false,
  },
  
  runtimeConfig: {
    kcApiKey: '',
    public: {
      kcApiUrl: 'https://api.kingscrowd.dev/api/v1'
    }
  },

  // ! Briefly considered different caching options for this project but did not follow through with time constraints
  // nitro: {
  //   storage: {
  //     cache: {
  //       driver: 'memory'
  //     },
  //   }
  // }
})