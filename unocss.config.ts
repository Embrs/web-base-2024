// https://unocss-cn.pages.dev/guide/
// https://www.may-notes.com/unocss-tricks/
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss';
import extractorPug from '@unocss/extractor-pug';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  shortcuts: [ // class 集合
    {
      wh: 'w-full h-full',
      row: 'flex items-center',
      col: 'flex flex-col',

      'btn-click': `
        cursor-pointer select-none transition-filter-200
        hover:brightness-110
        active:brightness-90
      `
    },
    [/^wh-\[?(.*?)\]?$/, ([, wh]) => `w-${wh} h-${wh}`],
    [/^wh-\[?(.*?)\]?-\[?(.*?)\]?$/, ([, w, h]) => `w-${w} h-${h}`],

    [/^row-\[?(.*?)\]?$/, ([, gap]) => `row gap-${gap}`],
    [/^row-\[?(.*?)\]?-\[?(.*?)\]?$/, ([, gap, justify]) => `row-${gap} justify-${justify}`],

    [/^col-\[?(.*?)\]?$/, ([, gap]) => `col gap-${gap}`],
    [/^col-\[?(.*?)\]?-\[?(.*?)\]?$/, ([, gap, align]) => `col-${gap} items-${align}`]
  ],
  rules: [ // 建立 uno class
    // ['row', { display: 'flex', 'align-items': 'center' }],
    // ['col', { display: 'flex', 'flex-direction': 'column' }]
  ],
  theme: {
    // ...
    colors: {
      demo: 'var(--demo)',
      'primary-900': 'var(--primary-900)',
      'primary-800': 'var(--primary-800)',
      'primary-700': 'var(--primary-700)',
      'primary-600': 'var(--primary-600)',
      'primary-500': 'var(--primary-500)',
      'primary-400': 'var(--primary-400)',
      'primary-300': 'var(--primary-300)',
      'primary-200': 'var(--primary-200)',
      'primary-100': 'var(--primary-100)',
      primary: 'var(--primary)',
      'secondary-900': 'var(--secondary-900)',
      'secondary-800': 'var(--secondary-800)',
      'secondary-700': 'var(--secondary-700)',
      'secondary-600': 'var(--secondary-600)',
      'secondary-500': 'var(--secondary-500)',
      'secondary-400': 'var(--secondary-400)',
      'secondary-300': 'var(--secondary-300)',
      'secondary-200': 'var(--secondary-200)',
      'secondary-100': 'var(--secondary-100)',
      secondary: 'var(--secondary)',
      'tertiary-900': 'var(--tertiary-900)',
      'tertiary-800': 'var(--tertiary-800)',
      'tertiary-700': 'var(--tertiary-700)',
      'tertiary-600': 'var(--tertiary-600)',
      'tertiary-500': 'var(--tertiary-500)',
      'tertiary-400': 'var(--tertiary-400)',
      'tertiary-300': 'var(--tertiary-300)',
      'tertiary-200': 'var(--tertiary-200)',
      'tertiary-100': 'var(--tertiary-100)',
      tertiary: 'var(--tertiary)',
      error: 'var(--error)',
      gray: 'var(--gray)',
      text: 'var(--text)',
      bg: 'var(--bg)'
    },
    breakpoints: {
      md: '769px',
      lg: '1025px',
      xl: '1289px'
    }
  },
  presets: [
    presetUno(),
    presetAttributify()
    // presetIcons({
    //   scale: 1.2
    // })
  ],
  transformers: [
    transformerDirectives()
  ],
  extractors: [
    transformerVariantGroup(), // 可群組
    extractorPug() // 可用於 pug
  ]
});
