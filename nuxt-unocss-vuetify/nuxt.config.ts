// import { presetVuetify } from 'unocss-preset-vuetify'
import { presetVuetify } from '../../unocss-preset-vuetify/dist/index.mjs'

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
    'assets/styles/main.scss',
  ],

  vuetify: {
    moduleOptions: {
      disableVuetifyStyles: true,
      styles: { configFile: 'assets/styles/settings.scss' },
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
      },
      defaults: {
        global: {
          ripple: false,
        },
      },
    },
  },

  unocss: {
    preflights: [
      // HSL version
      {
        getCSS() {
          return [
            // credits: https://www.iamsajid.com/colors/
            `:root { --brand-hue: 180; }`,
            `.v-theme--light {`,
            `  --v-theme-primary: hsl(calc(var(--brand-hue) + 60), 80%, 20%);`,
            `  --v-theme-secondary: hsl(calc(var(--brand-hue) + 300), 80%, 20%);`,
            `  --v-theme-background: hsl(var(--brand-hue), 50%, 80%);`,
            `  --v-theme-surface: hsl(var(--brand-hue), 50%, 85%);`,

            `  --v-theme-on-primary: var(--v-theme-background);`,
            `  --v-theme-on-secondary: var(--v-theme-background);`, // not sure..
            `  --v-theme-on-background: hsl(var(--brand-hue), 50%, 10%);`,
            `  --v-theme-on-surface: hsl(var(--brand-hue), 50%, 10%);`, // same
            `}`,

            `.v-theme--dark {`,
            `  --v-theme-primary: hsl(calc(var(--brand-hue) + 60), 80%, 80%);`,
            `  --v-theme-secondary: hsl(calc(var(--brand-hue) + 300), 80%, 80%);`,
            `  --v-theme-background: hsl(var(--brand-hue), 50%, 10%);`,
            `  --v-theme-surface: hsl(var(--brand-hue), 50%, 15%);`,

            `  --v-theme-on-primary: var(--v-theme-background);`,
            `  --v-theme-on-secondary: var(--v-theme-background);`, // not sure..
            `  --v-theme-on-background: hsl(var(--brand-hue), 50%, 90%);`,
            `  --v-theme-on-surface: hsl(var(--brand-hue), 50%, 90%);`, // same
            `}`,
          ].join('\n')
        },
      },
      // OKLCH version — hue 145 ≈ green (same perceptual hue as HSL 128)
      // oklch(L C H): L=0–1, C=0–0.4 (chroma, replaces saturation), H=0–360
      // {
      //   getCSS() {
      //     return [
      //       `.v-theme--light {`,
      //       `  --brand-hue: 145;`,
      //       `  --v-theme-primary: oklch(30% 0.15 calc(var(--brand-hue) + 60));`,
      //       `  --v-theme-secondary: oklch(30% 0.15 calc(var(--brand-hue) + 300));`,
      //       `  --v-theme-background: oklch(90% 0.05 var(--brand-hue));`,
      //       `  --v-theme-surface: oklch(95% 0.03 var(--brand-hue));`,
      //       `  --v-theme-on-primary: var(--v-theme-background);`,
      //       `  --v-theme-on-secondary: var(--v-theme-background);`,
      //       `  --v-theme-on-background: oklch(15% 0.05 var(--brand-hue));`,
      //       `  --v-theme-on-surface: oklch(15% 0.05 var(--brand-hue));`,
      //       `}`,
      //       `.v-theme--dark {`,
      //       `  --brand-hue: 145;`,
      //       `  --v-theme-primary: oklch(75% 0.15 calc(var(--brand-hue) + 60));`,
      //       `  --v-theme-secondary: oklch(75% 0.15 calc(var(--brand-hue) + 300));`,
      //       `  --v-theme-background: oklch(15% 0.05 var(--brand-hue));`,
      //       `  --v-theme-surface: oklch(20% 0.05 var(--brand-hue));`,
      //       `  --v-theme-on-primary: var(--v-theme-background);`,
      //       `  --v-theme-on-secondary: var(--v-theme-background);`,
      //       `  --v-theme-on-background: oklch(90% 0.05 var(--brand-hue));`,
      //       `  --v-theme-on-surface: oklch(90% 0.05 var(--brand-hue));`,
      //       `}`,
      //     ].join('\n')
      //   },
      // },
    ],
    presets: [
      presetVuetify({
        font: {
          heading: 'Roboto, sans-serif',
          body: 'Roboto, sans-serif',
        },
        themes: ['light', 'dark'],
        typography: 'md2',
        elevation: {},
        // elevation: Object.fromEntries([
        //   '0px 0px 0px 0px [1], 0px 0px  0px 0px [2]',
        //   '0px 1px 2px 0px [1], 0px 1px  3px 1px [2]',
        //   '0px 1px 2px 0px [1], 0px 2px  6px 2px [2]',
        //   '0px 1px 3px 0px [1], 0px 4px  8px 3px [2]',
        //   '0px 2px 3px 0px [1], 0px 6px 10px 4px [2]',
        //   '0px 4px 4px 0px [1], 0px 8px 12px 6px [2]',
        // ]
        //   .map(line => line
        //     .replace('[1]', 'hsla(var(--brand-hue), 50%, 10%, 0.3)')
        //     .replace('[2]', 'hsla(var(--brand-hue), 50%, 10%, 0.15)'),
        //   )
        //   .map((line, i) => [String(i), {
        //     'box-shadow': line,
        //     '--v-elevation-overlay': `color-mix(in srgb, var(--v-elevation-overlay-color, #000) ${i * 2}%, transparent)`,
        //   }])),
      }) as any,
    ],
    variants: [
      (input: string) => input.startsWith('hover:')
        ? ({ matcher: input.slice(6), selector: (s: string) => `${s}:hover:not(:active)` })
        : input,
      (input: string) => input.startsWith('active:')
        ? ({ matcher: input.slice(7), selector: (s: string) => `${s}:active` })
        : input,
    ],
    rules: [
      [/^elevation-(\d+)$/, ([_, level]) => ({
        '--elevation-overlay-level': `var(--elevation-overlay-level-${level})`,
        '--shadow-strength': `var(--shadow-strength-${level})`,
      })]
    ],
    safelist: [
      ...Array.from({ length: 25 }, (_, i) => `elevation-${i}`),
      ...['', '-0', '-sm', '-lg', '-xl', '-pill', '-circle', '-shaped'].map(suffix => `rounded${suffix}`),
    ],
    outputToCssLayers: {
      cssLayerName: (layer) => layer === 'properties' ? null : `uno.${layer}`,
    },
  },
})
