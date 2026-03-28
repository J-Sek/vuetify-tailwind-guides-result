import { presetIcons } from 'unocss'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-21',
  devtools: { enabled: true },
  // ssr: false,
  modules: [
    '@nuxt/fonts',
    '@unocss/nuxt',
    'vuetify-nuxt-module',
  ],

  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: '/layers.css' }
      ],
    },
  },

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },

  css: [
    'assets/styles/tailwind.css',
  ],

  vuetify: {
    moduleOptions: {
      styles: { configFile: 'assets/styles/settings.scss' },
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark', // default 'system' requires `ssr: false` to avoid hydration warnings
        utilities: false,
      },
      display: {
        mobileBreakpoint: 'md',
        thresholds: {
          xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560,
        },
      },
      icons: {
        defaultSet: 'unocss-mdi',
      },
    },
  },

  unocss: {
    presets: [
      presetIcons(),
    ],
    outputToCssLayers: {
      cssLayerName: layer => layer === 'properties' ? null : `uno-${layer}`,
    },
  },
})
