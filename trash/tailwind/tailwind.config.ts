/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}'
  ],
  corePlugins: {
    preflight: false // 拿掉預設樣式
  },
  theme: {
    colors: {
      'primary-100': 'var(--primary-100)',
      'primary-200': 'var(--primary-200)',
      'primary-300': 'var(--primary-300)',
      'primary-400': 'var(--primary-400)',
      'primary-500': 'var(--primary-500)',
      'primary-600': 'var(--primary-600)',
      'primary-700': 'var(--primary-700)',
      'primary-800': 'var(--primary-800)',
      'primary-900': 'var(--primary-900)',
      'primary-950': 'var(--primary-950)',
      primary: 'var(--primary)',

      'secondary-100': 'var(--secondary-100)',
      'secondary-200': 'var(--secondary-200)',
      'secondary-300': 'var(--secondary-300)',
      'secondary-400': 'var(--secondary-400)',
      'secondary-500': 'var(--secondary-500)',
      'secondary-600': 'var(--secondary-600)',
      'secondary-700': 'var(--secondary-700)',
      'secondary-800': 'var(--secondary-800)',
      'secondary-900': 'var(--secondary-900)',
      secondary: 'var(--secondary)',

      'tertiary-100': 'var(--tertiary-100)',
      'tertiary-200': 'var(--tertiary-200)',
      'tertiary-300': 'var(--tertiary-300)',
      'tertiary-400': 'var(--tertiary-400)',
      'tertiary-500': 'var(--tertiary-500)',
      'tertiary-600': 'var(--tertiary-600)',
      'tertiary-700': 'var(--tertiary-700)',
      'tertiary-800': 'var(--tertiary-800)',
      'tertiary-900': 'var(--tertiary-900)',
      tertiary: 'var(--tertiary)',

      error: 'var(--error)',
      't-text': 'var(--t-dark)',
      't-gray': 'var(--t-gray)',
      bg: 'var(--bg)',
      'bg-white': 'var(--bg-white)',
      'bg-dark': 'var(--bg-dark)'
    },
    screens: {

      xl: { max: '1536px' },
      // => @media (max-width: 153px) { ... }

      lg: { max: '1024px' },
      // => @media (max-width: 1024px) { ... }

      md: { max: '768px' },
      // => @media (max-width: 768px) { ... }

      sm: { max: '375px' }
      // => @media (max-width: 375px) { ... }
    },
    extend: {
      fontSize: {},
      margin: {},
      padding: {},
      height: {},
      width: {},
      borderRadius: {},
      container: 'container' // 預設容器1536
    },
    container: {
      center: true, // 水平置中
      padding: '1.5rem' // 水平間距
    }
  },
  plugins: []
};

// 自定義fontsize
for (let i = 1; i <= 100; i++) {
  const remSize = `${(i / 16).toFixed(3)}rem`;
  module.exports.theme.extend.fontSize[`${i}px`] = remSize;
}

// 自定margin
for (let i = 1; i <= 100; i++) {
  const remSize = `${(i / 16).toFixed(3)}rem`;
  module.exports.theme.extend.margin[`${i}px`] = remSize;
}

// 自定padding
for (let i = 1; i <= 100; i++) {
  const remSize = `${(i / 16).toFixed(3)}rem`;
  module.exports.theme.extend.padding[`${i}px`] = remSize;
}

// 自定height
for (let i = 1; i <= 100; i++) {
  const remSize = `${(i / 16).toFixed(3)}rem`;
  module.exports.theme.extend.height[`${i}px`] = remSize;
}

// 自定width
for (let i = 1; i <= 100; i++) {
  const remSize = `${(i / 16).toFixed(3)}rem`;
  module.exports.theme.extend.width[`${i}px`] = remSize;
}

// 自定border-radius
for (let i = 1; i <= 100; i++) {
  const remSize = `${(i / 16).toFixed(3)}rem`;
  module.exports.theme.extend.borderRadius[`${i}px`] = remSize;
}
