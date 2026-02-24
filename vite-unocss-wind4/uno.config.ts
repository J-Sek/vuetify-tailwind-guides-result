import { defineConfig } from 'unocss'
import presetWind4 from '@unocss/preset-wind4'
import * as breakpoints from './src/theme/breakpoints'

export default defineConfig({
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
})
