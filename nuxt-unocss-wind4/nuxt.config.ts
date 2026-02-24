import presetWind4 from '@unocss/preset-wind4'
import * as breakpoints from './app/theme/breakpoints'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-21',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    'vuetify-nuxt-module',
  ],

  css: [
    'assets/styles/layers.css',
    'vuetify/styles',
  ],

  vuetify: {
    moduleOptions: {
      disableVuetifyStyles: true,
      styles: { configFile: 'assets/styles/settings.scss' },
    },
    vuetifyOptions: {
      display: {
        mobileBreakpoint: 'md',
        thresholds: breakpoints.forVuetify,
      },
    },
  },

  unocss: {
    presets: [
      presetWind4({
        preflights: {
          reset: false,
        },
        dark: {
          dark: '.v-theme--dark',
          light: '.v-theme--light',
        },
      }),
    ],
    theme: {
      breakpoint: breakpoints.forUnoCSS,
    },
    safelist: [
      ...Array.from({ length: 6 }, (_, i) => `elevation-${i}`),
      ...['', '-0', '-sm', '-lg', '-xl', '-pill', '-circle', '-shaped'].map(suffix => `rounded${suffix}`),
    ],
    outputToCssLayers: {
      cssLayerName: (layer) => layer === 'properties' ? null : `uno.${layer}`,
    },
  },
})
