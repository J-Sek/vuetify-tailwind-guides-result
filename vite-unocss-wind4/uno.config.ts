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
    colors: {
      primary: 'rgb(var(--v-theme-primary))',
    },
  },
  safelist: [
    ...Array.from({ length: 6 }, (_, i) => `elevation-${i}`),
    ...['', '-0', '-sm', '-lg', '-xl', '-pill', '-circle', '-shaped'].map(suffix => `rounded${suffix}`),
  ],
  outputToCssLayers: {
    cssLayerName: (layer) => layer === 'properties' ? null : `uno.${layer}`,
  },
  shortcuts: {
    'text-display-large':   'font-heading normal-case text-[3.5625rem] font-[400] leading-[1.1228] tracking-[-.0044em]',
    'text-display-medium':  'font-heading normal-case text-[2.8125rem] font-[400] leading-[1.1556] tracking-[normal]',
    'text-display-small':   'font-heading normal-case text-[2.25rem]   font-[400] leading-[1.2222] tracking-[normal]',
    'text-headline-large':  'font-heading normal-case text-[2rem]      font-[400] leading-[1.25]   tracking-[normal]',
    'text-headline-medium': 'font-heading normal-case text-[1.75rem]   font-[400] leading-[1.2857] tracking-[normal]',
    'text-headline-small':  'font-heading normal-case text-[1.5rem]    font-[400] leading-[1.3333] tracking-[normal]',
    'text-title-large':     'font-heading normal-case text-[1.375rem]  font-[400] leading-[1.2727] tracking-[normal]',
    'text-title-medium':    'font-body    normal-case text-[1rem]      font-[500] leading-[1.5]    tracking-[.0094em]',
    'text-title-small':     'font-body    normal-case text-[.875rem]   font-[500] leading-[1.4286] tracking-[.0071em]',
    'text-body-large':      'font-body    normal-case text-[1rem]      font-[400] leading-[1.5]    tracking-[.0313em]',
    'text-body-medium':     'font-body    normal-case text-[.875rem]   font-[400] leading-[1.4286] tracking-[.0179em]',
    'text-body-small':      'font-body    normal-case text-[.75rem]    font-[400] leading-[1.3333] tracking-[.0333em]',
    'text-label-large':     'font-body    normal-case text-[.875rem]   font-[500] leading-[1.4286] tracking-[.0071em]',
    'text-label-medium':    'font-body    normal-case text-[.75rem]    font-[500] leading-[1.3333] tracking-[.0417em]',
    'text-label-small':     'font-body    normal-case text-[.6875rem]  font-[500] leading-[1.4545] tracking-[.0455em]',
  },
})
