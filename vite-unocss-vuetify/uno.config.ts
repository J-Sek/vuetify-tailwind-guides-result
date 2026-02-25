import { defineConfig } from 'unocss'
// import { presetVuetify } from 'unocss-preset-vuetify'
import { presetVuetify } from '../../unocss-preset-vuetify/dist/index.mjs'

export default defineConfig({
  presets: [
    presetVuetify({
      font: {
        heading: 'Roboto, sans-serif',
        body: 'Roboto, sans-serif',
      },
      typography: 'md3',
    }),
  ],
  safelist: [
    ...Array.from({ length: 6 }, (_, i) => `elevation-${i}`),
    ...['', '-0', '-sm', '-lg', '-xl', '-pill', '-circle', '-shaped'].map(suffix => `rounded${suffix}`),
  ],
  outputToCssLayers: {
    cssLayerName: (layer) => layer === 'properties' ? null : `uno.${layer}`,
  },
})
