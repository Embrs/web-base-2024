import type { Theme } from '@unocss/preset-mini';
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  shortcuts: [ // class 集合
    // {
    //   'uno-btn': 'px-4 py-1 rounded inline-block bg-primary text-white cursor-pointer tracking-wide op90 hover:op50 disabled:cursor-default disabled:bg-gray-600 disabled:!op50 disabled:pointer-events-none',
    //   'icon-btn': 'text-1.2em cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary disabled:pointer-events-none',
    //   'square-btn': 'flex flex-gap-2 items-center border border-base px2 py1 relative !outline-none',
    //   'square-btn-mark': 'absolute h-2 w-2 bg-primary -right-0.2rem -top-0.2rem',

    //   'bg-base': 'bg-white dark:bg-[#121212]',
    //   'bg-overlay': 'bg-[#eee]:50 dark:bg-[#222]:50',
    //   'bg-header': 'bg-gray-500:5',
    //   'bg-active': 'bg-gray-500:8',
    //   'bg-hover': 'bg-gray-500:20',
    //   'border-base': 'border-gray-400:10',

    //   'tab-button': 'font-light op50 hover:op80 h-full px-4',
    //   'tab-button-active': 'op100 bg-gray-500:10',

    //   'scale-button': 'uno-btn bg-blue-3 flex-center c-red-900'
    // },
    // [/^(flex|grid)-center/g, () => 'justify-center items-center'],
    // [/^(flex|grid)-x-center/g, () => 'justify-center'],
    // [/^(flex|grid)-y-center/g, () => 'items-center']
    // [/^row-(\d+)$/, ([, d]) => ({ gap: `${d}px`, display: 'flex', 'align-items': 'center' })]

    // [/^row-\[?(.*?)\]?$/, (arr) => {
    //   console.log('arr', arr);
    //   return (`row gap-${arr[1]}`);
    // }], // row-10px
    [/^row-\[?(.*?)\]?$/, ([, gap]) => (`row gap-${gap}`)], // row-10px
    [/^row-\[?(.*?)\]?-\[?(.*?)\]?$/, ([, gap, align]) => (`row-${gap} justify-${align}`)], // row-10px-center
    [/^col-\[?(.*?)\]?$/, ([, gap]) => (`col gap-${gap}`)] // col-10px
    // [/^col-\[?(.*?)\]?-\[?(.*?)\]?$/, ([, gap, align]) => (`row-${gap} al-${align}`)], // row-10px-center
  ],
  rules: [ // 建立 uno class
    // ['row', { display: 'flex', 'align-items': 'center' }],
    ['row', { display: 'flex', 'align-items': 'center' }],
    ['col', { display: 'flex', 'flex-direction': 'column' }],
    // ['max-h-screen', { 'max-height': 'calc(var(--vh, 1vh) * 100)' }],
    // ['h-screen', { height: 'calc(var(--vh, 1vh) * 100)' }]
    // ['row', { display: 'flex', 'align-items': 'center' }],
    // // [/^row-(\d+)$/, ([, d]) => ({ gap: `${d}px`, display: 'flex', 'align-items': 'center' })]
    // [/^row-\[?(.*?)\]?$/, ([, size]) => (`row gap-${size}`)]
  ],
  theme: <Theme>{
    // ...
    colors: {
      // ok: 'var(--c-ok)',
      // primary: 'var(--c-primary)',
      // 'primary-deep': 'var(--c-primary-deep)',
      // mis: 'var(--c-mis)',

      'primary-900': 'var(--primary-900)',
      'primary-800': 'var(--primary-800)',
      'primary-700': 'var(--primary-700)',
      'primary-600': 'var(--primary-600)',
      'primary-500': 'var(--primary-500)',
      'primary-400': 'var(--primary-400)',
      'primary-300': 'var(--primary-300)',
      'primary-200': 'var(--primary-200)',
      'primary-100': 'var(--primary-100)',
      // primary: 'var(--primary)',
      'secondary-900': 'var(--secondary-900)',
      'secondary-800': 'var(--secondary-800)',
      'secondary-700': 'var(--secondary-700)',
      'secondary-600': 'var(--secondary-600)',
      'secondary-500': 'var(--secondary-500)',
      'secondary-400': 'var(--secondary-400)',
      'secondary-300': 'var(--secondary-300)',
      'secondary-200': 'var(--secondary-200)',
      'secondary-100': 'var(--secondary-100)',
      // secondary: 'var(--secondary)',
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
    }
  },
  presets: [
    presetUno(),
    presetAttributify()
    // presetIcons({
    //   scale: 1.2
    // })
  ]
});
